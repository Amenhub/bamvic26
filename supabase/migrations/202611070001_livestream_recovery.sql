create extension if not exists pgcrypto;
create table if not exists public.livestream_state (
  event_id text primary key,
  status text not null default 'waiting' check (status in ('waiting','live','reconnecting','offline','unknown')),
  video_id text, last_video_id text, title text, thumbnail text, started_at timestamptz,
  verified_at timestamptz, discovered_at timestamptz, next_discovery_at timestamptz not null default now(),
  last_success_at timestamptz, version bigint not null default 0, stale boolean not null default true,
  error_code text, error_at timestamptz, lease_owner uuid, lease_expires_at timestamptz,
  updated_at timestamptz not null default now()
);
create table if not exists public.livestream_events (
  id bigint generated always as identity primary key,
  event_id text not null, kind text not null, video_id text, details jsonb not null default '{}', created_at timestamptz not null default now()
);
create table if not exists public.livestream_quota (
  quota_date date primary key, used_units integer not null default 0 check (used_units >= 0),
  updated_at timestamptz not null default now()
);
alter table public.livestream_state enable row level security;
alter table public.livestream_events enable row level security;
alter table public.livestream_quota enable row level security;
revoke all on public.livestream_state, public.livestream_events, public.livestream_quota from public, anon, authenticated;
grant select, insert, update, delete on public.livestream_state, public.livestream_events, public.livestream_quota to service_role;
create or replace function public.reserve_livestream_quota(p_cost int,p_budget int default 7000)
returns jsonb language plpgsql security definer set search_path=public as $$
declare d date := (clock_timestamp() at time zone 'UTC')::date; u int; begin
 insert into livestream_quota(quota_date) values(d) on conflict do nothing;
 update livestream_quota set used_units=used_units+p_cost,updated_at=clock_timestamp() where quota_date=d and used_units+p_cost<=p_budget returning used_units into u;
 if u is null then return jsonb_build_object('reserved',false,'remaining',0,'reset_at',(d+1)::timestamptz); end if;
 return jsonb_build_object('reserved',true,'remaining',greatest(0,p_budget-u),'reset_at',(d+1)::timestamptz);
end $$;
create or replace function public.claim_livestream_refresh(p_event_id text, p_lease_seconds int default 25)
returns jsonb language plpgsql security definer set search_path=public as $$
declare own uuid := gen_random_uuid(); begin
 insert into livestream_state(event_id) values(p_event_id) on conflict do nothing;
 update livestream_state set lease_owner=own, lease_expires_at=clock_timestamp()+make_interval(secs=>greatest(5,least(p_lease_seconds,60)))
 where event_id=p_event_id and (lease_owner is null or lease_expires_at < clock_timestamp());
 if found then return jsonb_build_object('claimed',true,'owner',own); end if;
 return jsonb_build_object('claimed',false);
end $$;
create or replace function public.complete_livestream_refresh(p_event_id text,p_owner uuid,p_status text,p_video_id text,p_title text,p_thumbnail text,p_started_at timestamptz,p_discovery_seconds int,p_error text default null)
returns boolean language plpgsql security definer set search_path=public as $$
declare oldrow livestream_state%rowtype; begin
 select * into oldrow from livestream_state where event_id=p_event_id and lease_owner=p_owner and lease_expires_at>=clock_timestamp() for update;
 if not found then return false; end if;
 update livestream_state set status=p_status, last_video_id=case when p_video_id is null and oldrow.video_id is not null then oldrow.video_id when p_video_id is distinct from oldrow.video_id then oldrow.video_id else oldrow.last_video_id end,
 video_id=p_video_id, title=p_title, thumbnail=p_thumbnail, started_at=p_started_at, verified_at=clock_timestamp(),
 discovered_at=case when p_video_id is distinct from oldrow.video_id then clock_timestamp() else oldrow.discovered_at end,
 next_discovery_at=clock_timestamp()+make_interval(secs=>greatest(60,least(p_discovery_seconds,600))),
 last_success_at=case when p_error is null then clock_timestamp() else oldrow.last_success_at end,
 version=oldrow.version+case when p_video_id is distinct from oldrow.video_id or p_status is distinct from oldrow.status then 1 else 0 end,
 stale=(p_error is not null), error_code=case when p_error is null then null else 'refresh_failed' end, error_at=case when p_error is null then null else clock_timestamp() end,
 lease_owner=null,lease_expires_at=null,updated_at=clock_timestamp() where event_id=p_event_id;
 if p_error is not null then insert into livestream_events(event_id,kind,video_id,details) values(p_event_id,case when p_error ilike '%quota%' then 'quota_error' else 'api_failure' end,oldrow.video_id,jsonb_build_object('error',p_error));
 elsif p_video_id is distinct from oldrow.video_id then insert into livestream_events(event_id,kind,video_id) values(p_event_id,case when oldrow.video_id is null then 'discovered' else 'changed' end,p_video_id);
 elsif oldrow.status='live' and p_status<>'live' then insert into livestream_events(event_id,kind,video_id) values(p_event_id,'livestream_ended',oldrow.video_id); end if;
 return true;
end $$;
revoke all on function public.claim_livestream_refresh(text,int) from public,anon,authenticated;
revoke all on function public.complete_livestream_refresh(text,uuid,text,text,text,text,timestamptz,int,text) from public,anon,authenticated;
grant execute on function public.claim_livestream_refresh(text,int),public.complete_livestream_refresh(text,uuid,text,text,text,text,timestamptz,int,text) to service_role;
revoke all on function public.reserve_livestream_quota(int,int) from public,anon,authenticated;
grant execute on function public.reserve_livestream_quota(int,int) to service_role;
