import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "method_not_allowed" });
  const secret = process.env.LIVESTREAM_REFRESH_SECRET;
  const header = req.headers.authorization || "";
  if (!secret || header !== `Bearer ${secret}`) return res.status(401).json({ error: "unauthorized" });
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `https://${req.headers.host}`;
  const response = await fetch(`${base}/api/youtube-live?refresh=1`, { headers: { Authorization: `Bearer ${secret}`, "Cache-Control": "no-store" }, signal: AbortSignal.timeout(12000) });
  return res.status(response.status).json(await response.json());
}
