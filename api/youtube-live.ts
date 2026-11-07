import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { timingSafeEqual } from "node:crypto";
import { livestreamConfig } from "../config/livestream-secrets";
import { getQuotaReservation, getRpcData } from "./quota";

const channelId = livestreamConfig.YOUTUBE_CHANNEL_ID || "UCc8mnnXHeaWzIjOqMkBl-Fw";
const eventId = livestreamConfig.LIVESTREAM_EVENT_ID || "bamvic26";
const idPattern = /^[A-Za-z0-9_-]{11}$/;
type Status = "waiting" | "live" | "reconnecting" | "offline" | "unknown";
const headers = { "Cache-Control": "no-store, max-age=0", "CDN-Cache-Control": "no-store", "Vercel-CDN-Cache-Control": "no-store" };
type LiveRow = { status: Status; video_id: string | null; title: string | null; thumbnail: string | null; started_at: string | null; verified_at: string | null; version: number; stale: boolean; next_discovery_at: string | null };
type YouTubeVideo = { id: string; snippet?: { channelId?: string; title?: string; liveBroadcastContent?: string; thumbnails?: { high?: { url?: string }; default?: { url?: string } } }; status?: { privacyStatus?: string; embeddable?: boolean }; liveStreamingDetails?: { actualStartTime?: string; actualEndTime?: string } };
function publicState(row: LiveRow | null | undefined) {
  return { status: row?.status ?? "waiting", videoId: row?.video_id ?? null, title: row?.title ?? null, thumbnail: row?.thumbnail ?? null, startedAt: row?.started_at ?? null, verifiedAt: row?.verified_at ?? null, version: row?.version ?? 0, stale: Boolean(row?.stale) };
}
async function youtube(path: string, params: Record<string,string>) {
  const url = new URL(`https://www.googleapis.com/youtube/v3/${path}`);
  Object.entries({ ...params, key: livestreamConfig.YOUTUBE_API_KEY || "" }).forEach(([k,v]) => url.searchParams.set(k,v));
  const response = await fetch(url, { signal: AbortSignal.timeout(9000) });
  if (!response.ok) throw new Error(response.status === 403 ? "quota_or_api_error" : "youtube_api_error");
  return response.json();
}
function inWindow(now = new Date()) {
  const start = livestreamConfig.LIVESTREAM_MONITOR_START_LAGOS;
  const end = livestreamConfig.LIVESTREAM_MONITOR_END_LAGOS;
  if (!start || !end) return true;
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(now).split(":").map(Number);
  const minute = parts[0] * 60 + parts[1];
  const parse = (s: string) => { const [h,m] = s.split(":").map(Number); return h * 60 + m; };
  const a = parse(start), b = parse(end);
  return a <= b ? minute >= a && minute <= b : minute >= a || minute <= b;
}
function secretMatches(requestValue: string, expected: string) {
  const a = Buffer.from(requestValue); const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", headers["Cache-Control"]); res.setHeader("CDN-Cache-Control", "no-store"); res.setHeader("Vercel-CDN-Cache-Control", "no-store");
  if (_req.method !== "GET") return res.status(405).json({ error: "method_not_allowed" });
  if (_req.query.refresh === "1") {
    const expected = livestreamConfig.LIVESTREAM_REFRESH_SECRET;
    if (!expected || !secretMatches(String(_req.headers.authorization || "").replace(/^Bearer\s+/i, ""), expected)) return res.status(401).json({ error: "unauthorized" });
  }
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, YOUTUBE_API_KEY } = livestreamConfig;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !YOUTUBE_API_KEY) return res.status(503).json(publicState(null));
  const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const { data: rows } = await db.from("livestream_state").select("*").eq("event_id", eventId).limit(1);
  const current = rows?.[0] as LiveRow | undefined;
  try {
    const claimResult = await db.rpc("claim_livestream_refresh", { p_event_id: eventId, p_lease_seconds: 25 });
    const claim = getRpcData(claimResult, "refresh_lease_database_error");
    if (claim?.claimed) {
      try {
        let candidate: YouTubeVideo | null = null;
        if (current?.video_id && idPattern.test(current.video_id) && Date.now() - Date.parse(current.verified_at || "") > 25000) {
          const checked = await youtube("videos", { part: "snippet,status,liveStreamingDetails", id: current.video_id }) as { items?: YouTubeVideo[] };
          const v = checked.items?.[0];
          if (v?.snippet?.liveBroadcastContent === "live" && v.liveStreamingDetails?.actualStartTime && !v.liveStreamingDetails?.actualEndTime && v.status?.privacyStatus === "public" && v.status?.embeddable === true) candidate = v;
        }
        const due = !current || Date.now() >= Date.parse(current.next_discovery_at || "");
        if (due && inWindow()) {
          const reservation = await db.rpc("reserve_livestream_quota", { p_cost: 100, p_budget: Number(livestreamConfig.LIVESTREAM_DAILY_QUOTA_BUDGET || 7000) });
          getQuotaReservation(reservation);
          const search = await youtube("search", { part: "snippet", channelId, eventType: "live", type: "video", maxResults: "50" }) as { items?: { id?: { videoId?: string } }[] };
          const ids = [...new Set((search.items || []).map((x) => x.id?.videoId).filter((x: unknown) => typeof x === "string" && idPattern.test(x)))];
          if (ids.length) {
            const verified = await youtube("videos", { part: "snippet,status,liveStreamingDetails", id: ids.join(",") }) as { items?: YouTubeVideo[] };
          candidate = (verified.items || []).filter((v) => v.snippet?.channelId === channelId && v.snippet?.liveBroadcastContent === "live" && v.liveStreamingDetails?.actualStartTime && !v.liveStreamingDetails?.actualEndTime && v.status?.privacyStatus === "public" && v.status?.embeddable === true).sort((a,b) => Date.parse(b.liveStreamingDetails!.actualStartTime!)-Date.parse(a.liveStreamingDetails!.actualStartTime!))[0] || candidate;
          }
        }
        const nextStatus: Status = candidate ? "live" : current?.video_id ? "reconnecting" : "waiting";
        const nextVideo = candidate?.id ?? (current?.video_id && nextStatus === "reconnecting" && !inWindow() ? current.video_id : null);
        const completed = await db.rpc("complete_livestream_refresh", { p_event_id: eventId, p_owner: claim.owner, p_status: nextStatus, p_video_id: nextVideo, p_title: candidate?.snippet?.title ?? current?.title ?? null, p_thumbnail: candidate?.snippet?.thumbnails?.high?.url ?? candidate?.snippet?.thumbnails?.default?.url ?? current?.thumbnail ?? null, p_started_at: candidate?.liveStreamingDetails?.actualStartTime ?? current?.started_at ?? null, p_discovery_seconds: 180, p_error: null });
        if (completed.error) throw new Error("refresh_completion_database_error");
      } catch (error) {
        const safeError = error instanceof Error && ["quota_exhausted", "quota_database_error", "refresh_lease_database_error", "youtube_api_error", "quota_or_api_error"].includes(error.message) ? error.message : "refresh_failed";
        await db.rpc("complete_livestream_refresh", { p_event_id: eventId, p_owner: claim.owner, p_status: current?.video_id ? "reconnecting" : "unknown", p_video_id: current?.video_id ?? null, p_title: current?.title ?? null, p_thumbnail: current?.thumbnail ?? null, p_started_at: current?.started_at ?? null, p_discovery_seconds: 300, p_error: safeError });
      }
    }
  } catch { /* preserve shared last known state */ }
  const { data: latest } = await db.from("livestream_state").select("*").eq("event_id", eventId).limit(1);
  return res.status(200).json(publicState((latest?.[0] as LiveRow | undefined) ?? current));
}
