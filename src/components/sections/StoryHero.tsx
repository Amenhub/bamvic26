export default function StoryHero() {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dskyahrkd/image/upload/v1788439246/AIV1_vycqo7.jpg')" }}
      />

      {/* Dark tint to keep text readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center gap-6 md:gap-10 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/90">
          Our Journey Together
        </p>

        {/* Title */}
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          The Story of Us
        </h1>

        {/* Quote */}
        <p className="font-serif italic text-lg md:text-2xl text-white/95 leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          &ldquo;In every heartbeat, in every shared laugh, we found a love that
          felt like coming home.&rdquo;
        </p>
      </div>

      {/* Rounded bottom edge that bleeds into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-white rounded-t-[40px] md:rounded-t-[60px]" />
    </section>
  );
}