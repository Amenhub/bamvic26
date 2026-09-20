import { useEffect, useState } from "react";
import type { GalleryItem, GalleryFilterValue } from "../../data/gallery";

type GalleryGridProps = {
  items: GalleryItem[];
  filter: GalleryFilterValue;
};

export default function GalleryGrid({ items, filter }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filtered =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className="bg-white py-20 md:py-32 px-5 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {filtered.length === 0 && (
          <p className="text-center text-brown/50 italic font-serif text-lg py-20">
            No photos in this collection yet.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item)}
              className="group relative block w-full overflow-hidden rounded-2xl text-left transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brown/60"
              aria-label={`View larger image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="block h-auto w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brown-dark/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brown shadow-lg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brown-dark/80 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-brown shadow-md transition hover:bg-white"
              aria-label="Close image preview"
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}