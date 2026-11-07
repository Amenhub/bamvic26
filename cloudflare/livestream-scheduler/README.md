# Cloudflare livestream scheduler

From `cloudflare/livestream-scheduler`, update `VERCEL_REFRESH_URL` in `wrangler.toml` to the deployed Vercel `/api/livestream-refresh` URL. Set the Worker secret to the same random value as the Vercel `LIVESTREAM_REFRESH_SECRET`. Cron runs every minute; the Supabase lease and discovery interval continue to throttle work.
