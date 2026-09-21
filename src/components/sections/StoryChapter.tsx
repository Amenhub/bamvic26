import { motion } from "framer-motion";
import type { StoryChapter as StoryChapterType } from "../../data/story";

type Props = {
  chapter: StoryChapterType;
  index: number;
};

export default function StoryChapter({ chapter, index }: Props) {
  const isTextLeft = chapter.align === "left";

  return (
    <div className="relative">
      {/* Chapter marker on the spine */}
      <div className="absolute left-1/2 -translate-x-1/2 top-24 z-20 hidden md:flex">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-10 h-10 rounded-full bg-orange flex items-center justify-center shadow-lg"
        >
          <span className="text-white text-xs font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Grid: text + image */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: isTextLeft ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`flex flex-col gap-5 ${
            isTextLeft ? "md:text-right md:items-end" : "md:text-left md:items-start"
          }`}
        >
          <p className="text-orange text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] flex items-center gap-3">
            {isTextLeft ? (
              <>
                <span>{chapter.eyebrow}</span>
                <span className="hidden md:block w-12 h-px bg-orange" />
              </>
            ) : (
              <>
                <span className="hidden md:block w-12 h-px bg-orange" />
                <span>{chapter.eyebrow}</span>
              </>
            )}
          </p>

          <h2 className="font-serif text-3xl md:text-5xl text-brown leading-tight">
            {chapter.title}
          </h2>

          <div className="flex flex-col gap-4 mt-2">
            {chapter.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-brown/70 leading-relaxed text-base md:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isTextLeft ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={isTextLeft ? "md:order-2" : ""}
        >
          <div className="relative group">
            {/* Outer frame */}
            <div className="rounded-[28px] border border-beige/70 p-2 md:p-3 bg-white/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_25px_60px_-20px_rgba(59,35,20,0.35)]">
              {/* Inner image */}
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  loading="lazy"
                  className="w-full h-[320px] md:h-[420px] lg:h-[480px] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}