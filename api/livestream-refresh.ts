import type { VercelRequest, VercelResponse } from "@vercel/node";
import { timingSafeEqual } from "node:crypto";
import { livestreamConfig } from "../config/livestream-secrets";

function matchesBearer(header: string, secret: string) {
  const token = header.match(/^Bearer\s+(.+)$/i)?.[1] ?? "";
  const actual = Buffer.from(token);
  const expected = Buffer.from(secret);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "method_not_allowed" });
  const secret = livestreamConfig.LIVESTREAM_REFRESH_SECRET;
  const header = req.headers.authorization || "";
  if (!secret || !matchesBearer(header, secret)) return res.status(401).json({ error: "unauthorized" });
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `https://${req.headers.host}`;
  try {
    const response = await fetch(`${base}/api/youtube-live?refresh=1`, { headers: { Authorization: `Bearer ${secret}`, "Cache-Control": "no-store" }, signal: AbortSignal.timeout(12000) });
    const body = await response.json();
    return res.status(response.status).json(body);
  } catch {
    return res.status(504).json({ error: "refresh_unavailable" });
  }
}
