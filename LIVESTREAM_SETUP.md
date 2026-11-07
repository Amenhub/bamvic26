# Livestream recovery setup

## Supabase

1. Open the production Supabase project’s SQL Editor and run `supabase/migrations/202611070001_livestream_recovery.sql`, then `supabase/migrations/202611070003_public_livestream_read.sql`.
2. Confirm `livestream_state`, `livestream_events`, and `livestream_quota` exist with RLS enabled. The public-read migration exposes only selected livestream status columns for the `bamvic26` row; writes, other rows, and internal tables remain server-only.

## Vercel

1. Add the values in `.env.example` under Project → Settings → Environment Variables. Supply the YouTube Data API key, Supabase project URL and service role key, and a long random `LIVESTREAM_REFRESH_SECRET`. Keep all of these server-side and never use `VITE_` prefixes.
2. Configure `LIVESTREAM_MONITOR_START_LAGOS` / `LIVESTREAM_MONITOR_END_LAGOS` as `HH:mm` values in Africa/Lagos time (the window can cross midnight). Set `LIVESTREAM_DAILY_QUOTA_BUDGET` to a conservative integer (recommended 7000 from the usual 10,000-unit allocation).
3. Set `LIVESTREAM_REFRESH_SECRET` on Vercel. Cloudflare Worker Cron invokes the protected refresh route. The website reads the public `bamvic26` status row directly from Supabase using a publishable key; the service-role key remains server-only. See `cloudflare/livestream-scheduler/README.md` for deployment commands.
4. Public `GET /api/youtube-live` requests coordinate through the database lease. Discovery attempts reserve 100 units atomically against a UTC-day counter before `search.list`. YouTube quota resets at midnight Pacific Time; the current database counter resets by UTC day, which is conservative around the boundary but can temporarily undercount/overcount relative to YouTube's exact project reset. Configure budget below the project allocation to retain recovery margin.

Outside the Lagos monitoring window channel discovery is not run. The status endpoint still returns shared state; known video verification remains available when refresh occurs. Switch windows on in Vercel for the event period. YouTube indexing and discovery cadence mean replacement detection is not instant.
