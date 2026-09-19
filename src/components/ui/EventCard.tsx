import type { WeddingEvent } from "../../data/events";

export default function EventCard({ event }: { event: WeddingEvent }) {
  const featured = event.featured;

  return (
    <div
      className={`
        relative flex flex-col items-center text-center
        w-full md:w-[320px] lg:w-[360px]
        rounded-3xl
        px-6 md:px-8
        ${
          featured
            ? "py-16 md:py-20 bg-brown shadow-[0_20px_50px_-15px_rgba(59,35,20,0.4)] md:-mt-8 md:mb-8"
            : "py-14 md:py-16 bg-[#FAF7F2] shadow-[0_10px_30px_-15px_rgba(59,35,20,0.15)]"
        }
      `}
    >
      {/* Eyebrow */}
      <p className="text-orange text-sm md:text-base font-serif">
        {event.eyebrow}
      </p>

      {/* Title */}
      <h3
        className={`
          mt-4 font-serif uppercase tracking-[0.1em] leading-tight
          text-2xl md:text-3xl
          ${featured ? "text-white" : "text-brown"}
        `}
      >
        {event.title}
      </h3>

      {/* Divider */}
      <div className="w-12 h-px bg-orange my-6 md:my-8" />

      {/* Date + time */}
      <div
        className={`flex flex-col gap-1 text-base md:text-lg ${
          featured ? "text-white/90" : "text-brown"
        }`}
      >
        <span>{event.date}</span>
        <span>{event.time}</span>
      </div>

      {/* Venue */}
      <p
        className={`mt-6 text-sm md:text-base leading-relaxed ${
          featured ? "text-white/70" : "text-brown/70"
        }`}
      >
        {event.venue}
      </p>

      {/* Featured card gets the dot + line accent at the bottom */}
      {featured && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="w-px h-10 bg-orange/60" />
        </div>
      )}
    </div>
  );
}