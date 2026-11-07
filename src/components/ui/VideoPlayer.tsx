import type { VideoItem } from "../../data/gallery";

export default function VideoPlayer({ video }: { video: VideoItem }) {
  const hasPlayableVideo = Boolean(
    video.videoId &&
      video.videoId !== "YOUR_YOUTUBE_VIDEO_ID"
  );

  const isPortrait =
    video.title.toLowerCase().includes("portrait") ||
    video.title.toLowerCase().includes("story");

  // Empty state
  if (!hasPlayableVideo) {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f5efe8] text-brown">
        <div className="px-6 text-center">
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

          <p className="font-serif text-2xl md:text-3xl">
            Video coming soon
          </p>

          <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-brown/60">
            Stay tuned
          </p>
        </div>
      </div>
    );
  }

  // YouTube video / YouTube Live
  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-2xl bg-black ${
        isPortrait
          ? "h-[78vh] w-full max-w-[420px]"
          : "aspect-video w-full"
      }`}
    >
      <iframe
        key={video.videoId}
        src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&mute=1&controls=1&rel=0&playsinline=1`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        className="h-full w-full border-0"
      />
    </div>
  );
}