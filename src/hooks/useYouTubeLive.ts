import { useCallback, useEffect, useRef, useState } from "react";

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
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch("/api/youtube-live", { cache: "no-store", signal: controller.signal });
      if (!response.ok) throw new Error("Livestream status unavailable");
      const next = await response.json() as YouTubeLiveState;
      if (request === latest.current) setState(next);
    } catch {
      if (request === latest.current) setState((old) => ({ ...old, status: "unknown", stale: true }));
    } finally { clearTimeout(timeout); busy.current = false; }
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
