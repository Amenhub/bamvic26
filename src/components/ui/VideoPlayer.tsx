import { useEffect, useRef } from "react";
import Hls from "hls.js";
import type { VideoItem } from "../../data/gallery";

const CLOUDINARY_CLOUD_NAME = "dskyahrkd";

export default function VideoPlayer({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasPlayableVideo = Boolean(
    video.videoId && video.videoId !== "YOUR_YOUTUBE_VIDEO_ID"
  );

  const isPortrait =
    video.title.toLowerCase().includes("portrait") ||
    video.title.toLowerCase().includes("story");

  // Detect HLS: only true live streams should use the Cloudinary live endpoint.
  const isHls = video.isLive === true || video.videoId.endsWith("_hls");
  const cleanVideoId = video.videoId.replace(/\.(mp4|m3u8)$/i, "");

  // Build the Cloudinary URL correctly for each video type:
  // - regular MP4s use the upload endpoint
  // - live HLS streams use the live endpoint
  const cloudinaryUrl = isHls
    ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/live/${cleanVideoId}.m3u8`
    : `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${cleanVideoId}.mp4`;

  // Wire up hls.js (or native playback for Safari)
  useEffect(() => {
    if (video.source !== "cloudinary" || !isHls) return;

    const el = videoRef.current;
    if (!el) return;

    // Safari & iOS can play HLS natively
    if (el.canPlayType("application/vnd.apple.mpegurl")) {
      el.src = cloudinaryUrl;
      return;
    }

    // Everywhere else: use hls.js
    if (Hls.isSupported()) {
      const hls = new Hls({
        // Sensible defaults for live streams
        lowLatencyMode: true,
        enableWorker: true,
      });
      hls.loadSource(cloudinaryUrl);
      hls.attachMedia(el);
      return () => hls.destroy();
    }
  }, [cloudinaryUrl, isHls, video.source]);

  // Empty state
  if (!hasPlayableVideo) {
    return (
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-[#f5efe8] flex items-center justify-center text-brown">
        <div className="text-center px-6">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="font-serif text-2xl md:text-3xl">Video coming soon</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-brown/60">
            Stay tuned
          </p>
        </div>
      </div>
    );
  }

  // YouTube
  if (video.source === "youtube") {
    return (
      <div
        className={`relative mx-auto overflow-hidden rounded-2xl bg-black ${
          isPortrait ? "h-[78vh] w-auto max-w-[420px]" : "w-full aspect-video"
        }`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  // Cloudinary — MP4 (regular video)
  if (!isHls) {
    return (
      <div
        className={`relative mx-auto overflow-hidden rounded-2xl bg-black ${
          isPortrait ? "h-[78vh] w-auto max-w-[420px]" : "w-full aspect-video"
        }`}
      >
        <video
          src={cloudinaryUrl}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  // Cloudinary — HLS (live stream)
  return (
    <div className="relative mx-auto w-full aspect-[16/9] overflow-hidden bg-black md:aspect-[16/8.5]">
      <video
        ref={videoRef}
        controls
        autoPlay
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}