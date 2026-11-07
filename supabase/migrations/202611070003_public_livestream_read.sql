-- Allow the browser's public Supabase key to read only the public status fields
-- for this event. All writes and internal livestream data remain server-only.
drop policy if exists "public can read bamvic26 livestream status" on public.livestream_state;
create policy "public can read bamvic26 livestream status"
  on public.livestream_state
  for select
  to anon, authenticated
  using (event_id = 'bamvic26');

revoke all on public.livestream_state from public, anon, authenticated;
grant select (event_id, status, video_id, title, thumbnail, started_at, verified_at, version, stale)
  on public.livestream_state to anon, authenticated;
