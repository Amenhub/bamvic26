import { Link } from "react-router-dom";
import { galleryPreview } from "../../data/gallery";

type GalleryImageProps = {
  src: string;
  alt: string;
  className?: string;
};

function GalleryImage({ src, alt, className = "" }: GalleryImageProps) {
  return (
    <div
      className={`
        group relative h-full min-h-[220px] overflow-hidden rounded-[24px] md:rounded-[32px]
        transition-shadow duration-500
        hover:shadow-[0_20px_50px_-15px_rgba(59,35,20,0.3)]
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="
          h-full w-full object-cover
          transition-transform duration-[800ms] ease-out
          group-hover:scale-110
        "
      />
      <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/10 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}

export default function GalleryPreview() {
  const [left, top, bottomLeft, bottomRight] = galleryPreview;

  return (
    <section className="bg-ivory/30 py-20 md:py-32 px-5 md:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-serif text-4xl md:text-6xl text-brown text-center">
            Captured Moments
          </h2>
          <div className="w-16 h-px bg-orange" />
        </div>

        {/* Grid — fixed height on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 md:h-[600px]">
          {/* Left: tall portrait spans both rows */}
          <GalleryImage
            src={left.src}
            alt={left.alt}
            className="h-[400px] md:h-full"
          />

          {/* Right column: two equal rows */}
          <div className="grid grid-rows-2 gap-3 md:gap-4 h-[500px] md:h-auto min-h-0">
            {/* Top wide */}
            <GalleryImage
              src={top.src}
              alt={top.alt}
              className="h-full"
            />

            {/* Bottom row: two squares */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 min-h-0">
              <GalleryImage
                src={bottomLeft.src}
                alt={bottomLeft.alt}
                className="h-full"
              />
              <GalleryImage
                src={bottomRight.src}
                alt={bottomRight.alt}
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to="/gallery"
            className="
              inline-block px-10 py-4
              border border-brown/30 rounded-full
              text-xs uppercase tracking-[0.3em] text-brown
              hover:bg-brown hover:text-white hover:border-brown
              transition-all duration-300
            "
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}