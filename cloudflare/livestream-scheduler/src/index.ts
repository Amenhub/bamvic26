export interface Env {
  VERCEL_REFRESH_URL: string;
  LIVESTREAM_REFRESH_SECRET: string;
}

export default {
  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(invokeRefresh(env));
  },
};

async function invokeRefresh(env: Env): Promise<void> {
  try {
    const response = await fetch(env.VERCEL_REFRESH_URL, {
      method: "GET",
      headers: { Authorization: `Bearer ${env.LIVESTREAM_REFRESH_SECRET}`, "Cache-Control": "no-store" },
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) console.error(`Livestream refresh endpoint returned HTTP ${response.status}`);
    await response.body?.cancel();
  } catch {
    console.error("Livestream scheduled refresh request failed");
  }
}
