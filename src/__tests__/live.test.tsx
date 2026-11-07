import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, act } from "@testing-library/react";
import VideoGrid from "../components/sections/VideoGrid";
import VideoPlayer from "../components/ui/VideoPlayer";
import { liveEventVideo } from "../data/gallery";
import type { VideoItem } from "../data/gallery";

afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.useRealTimers(); });
const state = (videoId: string | null, status = "live") => ({ status, videoId, title: "Ceremony", thumbnail: "https://img.test/live.jpg", startedAt: "2026-11-07T04:56:56Z", verifiedAt: new Date().toISOString(), version: 1, stale: false });
function mockFetch(get: () => object) { vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify(get()), { status: 200, headers: { "content-type": "application/json" } }))); }

describe("livestream UI", () => {
  it("uses current stream and replaces the iframe while modal remains open", async () => {
    vi.useFakeTimers(); Object.defineProperty(document, "visibilityState", { configurable: true, value: "visible" }); let id = "5_vVrw4Qiw8"; mockFetch(() => state(id));
    render(<VideoGrid videos={[liveEventVideo]} />);
    await act(async () => { vi.runOnlyPendingTimers(); await Promise.resolve(); });
    await act(async () => { screen.getByRole("button", { name: /ceremony/i }).click(); });
    expect(screen.getByTitle("Ceremony")).toHaveAttribute("src", expect.stringContaining(id));
    id = "QxqdmcqVMvI";
    await act(async () => { vi.advanceTimersByTime(15000); await Promise.resolve(); });
    expect(screen.getByTitle("Ceremony")).toHaveAttribute("src", expect.stringContaining(id));
  });
  it("does not remount iframe on metadata-only updates", () => {
    const item: VideoItem = { ...liveEventVideo, videoId: "QxqdmcqVMvI" };
    const { rerender } = render(<VideoPlayer video={item} />);
    const frame = screen.getByTitle(item.title);
    rerender(<VideoPlayer video={{ ...item, title: "Updated title" }} />);
    expect(screen.getByTitle("Updated title")).toBe(frame);
  });
  it("does not use an invalid YouTube ID in the embed URL", () => {
    render(<VideoPlayer video={{ ...liveEventVideo, videoId: "bad?feature=share" }} />);
    expect(document.querySelector("iframe")).toBeNull();
  });
});
