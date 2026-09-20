import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden isolate">
      {/* Background image */}
      <div  
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dskyahrkd/image/upload/v1788439195/DSC_1087_grrgjq.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brown-dark/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto gap-6 md:gap-8">
        {/* Eyebrow */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-beige/80">
          Saving the best for last
        </p>

        {/* Couple names */}
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white leading-[0.95] drop-shadow-lg">
          Ayobami <span className="text-orange">&amp;</span> Victor
        </h1>

        {/* Date + Location */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[10px] md:text-xs uppercase tracking-[0.3em] text-beige">
          <span>7 November 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
          <span>Igbole, Ekiti State</span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <Link
            to="/our-story"
            className="px-8 py-4 rounded-full bg-orange text-white text-xs uppercase tracking-[0.3em] font-medium hover:bg-orange/90 transition-colors"
          >
            Our Story
          </Link>
          <Link
            to="/bridal"
            className="px-8 py-4 rounded-full border border-white/70 text-white text-xs uppercase tracking-[0.3em] font-medium hover:bg-white/10 transition-colors"
          >
            View Bridal Train
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-beige/70">
          Scroll
        </span>
        <div className="w-px h-10 bg-beige/40" />
      </div>
    </section>
  );
}