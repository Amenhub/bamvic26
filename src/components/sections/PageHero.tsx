type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-brown-dark/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 md:gap-6 px-6">
        {/* Eyebrow */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70">
          {eyebrow}
        </p>

        {/* Title */}
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none">
          {title}
        </h1>

        {/* Subtitle with flanking lines */}
        {subtitle && (
          <div className="flex items-center gap-4 md:gap-6 mt-2">
            <span className="w-8 md:w-12 h-px bg-orange" />
            <p className="text-sm md:text-base text-white/90 font-light tracking-wide">
              {subtitle}
            </p>
            <span className="w-8 md:w-12 h-px bg-orange" />
          </div>
        )}
      </div>
    </section>
  );
}