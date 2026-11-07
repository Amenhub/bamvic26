-- Idempotent repair for projects where the original livestream migration was not applied fully.
create table if not exists public.livestream_quota (
  quota_date date primary key,
  used_units integer not null default 0 check (used_units >= 0),
  updated_at timestamptz not null default now()
);
alter table public.livestream_quota enable row level security;
revoke all on public.livestream_quota from public, anon, authenticated;
grant select, insert, update, delete on public.livestream_quota to service_role;

create or replace function public.reserve_livestream_quota(p_cost integer, p_budget integer default 7000)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_day date := (clock_timestamp() at time zone 'UTC')::date;
  v_used integer;
begin
  if p_cost <= 0 or p_budget < 0 then
    raise exception 'invalid quota reservation arguments' using errcode = '22023';
  end if;
  insert into public.livestream_quota(quota_date, used_units)
  values (v_day, 0) on conflict (quota_date) do nothing;
  update public.livestream_quota
  set used_units = used_units + p_cost, updated_at = clock_timestamp()
  where quota_date = v_day and used_units + p_cost <= p_budget
  returning used_units into v_used;
  if v_used is null then
    return jsonb_build_object('reserved', false, 'remaining', 0, 'reset_at', ((v_day + 1)::timestamp at time zone 'UTC'));
  end if;
  return jsonb_build_object('reserved', true, 'remaining', greatest(0, p_budget - v_used), 'reset_at', ((v_day + 1)::timestamp at time zone 'UTC'));
end;
$$;
revoke all on function public.reserve_livestream_quota(integer, integer) from public, anon, authenticated;
grant execute on function public.reserve_livestream_quota(integer, integer) to service_role;

-- Other RPC dependencies used by api/youtube-live.ts. Re-declare to repair partial installs safely.
create or replace function public.claim_livestream_refresh(p_event_id text, p_lease_seconds integer default 25)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_owner uuid := gen_random_uuid(); begin
  insert into public.livestream_state(event_id) values (p_event_id) on conflict (event_id) do nothing;
  update public.livestream_state set lease_owner = v_owner,
    lease_expires_at = clock_timestamp() + make_interval(secs => greatest(5, least(p_lease_seconds, 60)))
  where event_id = p_event_id and (lease_owner is null or lease_expires_at < clock_timestamp());
  if found then return jsonb_build_object('claimed', true, 'owner', v_owner); end if;
  return jsonb_build_object('claimed', false);
end $$;
revoke all on function public.claim_livestream_refresh(text, integer) from public, anon, authenticated;
grant execute on function public.claim_livestream_refresh(text, integer) to service_role;
