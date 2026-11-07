import { useState } from "react";
import { motion } from "framer-motion";
import type { VideoItem } from "../../data/gallery";
import VideoModal from "../ui/VideoModal";

export default function VideoGrid({ videos }: { videos: VideoItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const featured = videos.find((v) => v.featured);
  const rest = videos.filter((v) => !v.featured);
  const selected = videos.find((v) => v.id === activeId) ?? null;

  return (
    <section className="bg-white py-20 md:py-32 px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-14">
        {/* Featured / Live stream */}
        {featured && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setActiveId(featured.id)}
            className="group relative overflow-hidden rounded-3xl aspect-video w-full text-left"
          >
            <img
              src={featured.thumbnail}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Darker overlay for featured */}
            <div className="absolute inset-0 bg-brown-dark/50 group-hover:bg-brown-dark/60 transition-colors duration-300" />

            {/* LIVE badge */}
            {featured.isLive && (
              <div className="absolute top-5 left-5 md:top-8 md:left-8 flex items-center gap-3 px-4 py-2 rounded-full bg-red-600 text-white">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.3em]">
                  Live
                </span>
              </div>
            )}

            {/* Play button — bigger for featured */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/90 group-hover:bg-orange group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-brown group-hover:text-white ml-1.5 transition-colors"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Title area at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-brown-dark/95 via-brown-dark/60 to-transparent">
              <h3 className="font-serif text-2xl md:text-4xl text-white leading-tight">
                {featured.title}
              </h3>
              {featured.duration && (
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 mt-3">
                  {featured.duration}
                </p>
              )}
            </div>
          </motion.button>
        )}

        {/* Other videos */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((video, index) => (
              <motion.button
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setActiveId(video.id)}
                className="group relative overflow-hidden rounded-2xl aspect-video text-left"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-brown-dark/40 group-hover:bg-brown-dark/60 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-orange group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-brown group-hover:text-white ml-1 transition-colors"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-brown-dark/90 to-transparent">
                  <h3 className="font-serif text-lg md:text-xl text-white leading-tight">
                    {video.title}
                  </h3>
                  {video.duration && (
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70 mt-2">
                      {video.duration}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!featured && rest.length === 0 && (
          <p className="text-center text-brown/50 italic font-serif text-lg py-20">
            No videos yet. Check back soon.
          </p>
        )}
      </div>

      <VideoModal video={selected} onClose={() => setActiveId(null)} />
    </section>
  );
}
