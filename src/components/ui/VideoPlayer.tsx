import type { VideoItem } from "../../data/gallery";

const CLOUDINARY_CLOUD_NAME = "dskyahrkd";

export default function VideoPlayer({ video }: { video: VideoItem }) {
  const hasPlayableVideo = Boolean(video.videoId && video.videoId !== "YOUR_YOUTUBE_VIDEO_ID");

  if (!hasPlayableVideo) {
    return (
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-[#f5efe8] flex items-center justify-center text-brown">
        <div className="text-center px-6">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

  if (video.source === "youtube") {
    return (
      <div className="relative w-full aspect-video bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black">
      <video
        src={`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${video.videoId}.mp4`}
        controls
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}