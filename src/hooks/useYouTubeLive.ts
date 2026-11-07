import { useCallback, useEffect, useRef, useState } from "react";
import { supabasePublishableKey, supabaseUrl } from "../lib/supabase";

export type YouTubeLiveStatus = "waiting" | "live" | "reconnecting" | "offline" | "unknown";
export type YouTubeLiveState = {
  status: YouTubeLiveStatus; videoId: string | null; title: string | null; thumbnail: string | null;
  startedAt: string | null; verifiedAt: string | null; version: number; stale: boolean;
};
const initial: YouTubeLiveState = { status: "unknown", videoId: null, title: null, thumbnail: null, startedAt: null, verifiedAt: null, version: 0, stale: true };
export function useYouTubeLive() {
  const [state, setState] = useState(initial);
  const busy = useRef(false);
  const latest = useRef(0);
  const fetchState = useCallback(async () => {
    if (busy.current || document.visibilityState === "hidden") return;
    busy.current = true;
    const request = ++latest.current;
    try {
      const url = new URL("/rest/v1/livestream_state", supabaseUrl);
      url.searchParams.set("select", "status,video_id,title,thumbnail,started_at,verified_at,version,stale");
      url.searchParams.set("event_id", "eq.bamvic26");
      url.searchParams.set("limit", "1");
      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          apikey: supabasePublishableKey,
          Authorization: `Bearer ${supabasePublishableKey}`,
        },
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error("Livestream status unavailable");
      const [data] = await response.json() as {
        status: YouTubeLiveStatus;
        video_id: string | null;
        title: string | null;
        thumbnail: string | null;
        started_at: string | null;
        verified_at: string | null;
        version: number;
        stale: boolean;
      }[];
      const next: YouTubeLiveState = {
        status: data?.status ?? "waiting",
        videoId: data?.video_id ?? null,
        title: data?.title ?? null,
        thumbnail: data?.thumbnail ?? null,
        startedAt: data?.started_at ?? null,
        verifiedAt: data?.verified_at ?? null,
        version: data?.version ?? 0,
        stale: data?.stale ?? false,
      };
      if (request === latest.current) setState(next);
    } catch {
      if (request === latest.current) setState((old) => ({ ...old, status: "unknown", stale: true }));
    } finally { busy.current = false; }
  }, []);
  useEffect(() => {
    const requestVersion = latest;
    const start = window.setTimeout(() => void fetchState(), 0);
    const timer = window.setInterval(() => void fetchState(), 15000);
    const visible = () => { if (document.visibilityState === "visible") void fetchState(); };
    document.addEventListener("visibilitychange", visible);
    return () => { window.clearTimeout(start); window.clearInterval(timer); document.removeEventListener("visibilitychange", visible); requestVersion.current++; };
  }, [fetchState]);
  return state;
}
