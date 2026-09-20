import { Link } from "react-router-dom";

export default function StoryPreview() {
  return (
    <section className="bg-white py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="rounded-[32px] border border-beige/60 p-3 md:p-4">
            <img
              src="https://res.cloudinary.com/dskyahrkd/image/upload/v1789758660/eh_q6jqwh.jpg"
              alt="Ayobami and Victor"
              className="w-full h-[400px] md:h-[520px] lg:h-[560px] object-cover rounded-[24px]"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-xl">
          {/* Eyebrow */}
          <p className="text-orange text-xs font-bold uppercase tracking-[0.5em]">
            Where It All Began
          </p>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-6xl text-brown leading-tight">
            Our Love Story
          </h2>

          {/* Body */}
          <div className="flex flex-col gap-6 text-lg md:text-xl text-brown/70 italic font-serif leading-relaxed">
            <p>
              &ldquo;It wasn&rsquo;t just a chance encounter; it felt like the
              universe had been conspiring for years to bring us to that exact
              meeting point.&rdquo;
            </p>
            <p>
              The story finally began in Ilorin, in a season neither of us
              knew would become the beginning of something so beautiful.
            </p>
          </div>

          {/* Link */}
          <Link
            to="/our-story"
            className="inline-flex items-center gap-3 mt-4 group w-fit"
          >
            <span className="text-brown font-medium border-b border-brown pb-1 group-hover:text-orange group-hover:border-orange transition-colors">
              Read our full story
            </span>
            <span className="text-orange text-xl group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}