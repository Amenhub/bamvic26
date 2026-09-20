import { useEffect } from "react";
import type { VideoItem } from "../../data/gallery";
import VideoPlayer from "./VideoPlayer";

type VideoModalProps = {
  video: VideoItem | null;
  onClose: () => void;
};

export default function VideoModal({ video, onClose }: VideoModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [video]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-brown-dark/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Player — stop click propagation so clicking the video doesn't close it */}
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <VideoPlayer video={video} />
        <p className="mt-4 text-center text-white/80 text-sm font-serif italic">
          {video.title}
        </p>
      </div>
    </div>
  );
}