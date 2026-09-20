import type { GalleryFilterValue } from "../../data/gallery";

type Filter = {
  value: GalleryFilterValue;
  label: string;
  isVideo?: boolean;
};

const filters: Filter[] = [
  { value: "all", label: "All Moments" },
  { value: "pre-wedding", label: "Pre-Wedding" },
  { value: "traditional", label: "Traditional" },
  { value: "engagement", label: "Engagement" },
  { value: "videos", label: "Videos", isVideo: true },
];

type GalleryFilterProps = {
  active: GalleryFilterValue;
  onChange: (value: GalleryFilterValue) => void;
};

export default function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <nav className="bg-ivory py-8 md:py-12 px-6 md:px-16">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-8 md:gap-x-16 gap-y-4">
        {filters.map((filter) => {
          const isActive = active === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() => onChange(filter.value)}
              className={`
                relative inline-flex items-center gap-2
                text-[10px] md:text-xs uppercase tracking-[0.4em]
                pb-2 transition-colors duration-300
                ${
                  isActive
                    ? "text-brown font-bold"
                    : filter.isVideo
                    ? "text-orange hover:text-orange/70"
                    : "text-brown/50 hover:text-brown"
                }
              `}
            >
              {/* Video icon */}
              {filter.isVideo && (
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="currentColor"
                  className="w-4 h-3"
                >
                  <rect x="0" y="0" width="11" height="12" rx="1.5" />
                  <path d="M12.5 3.5L16 1v10l-3.5-2.5V3.5z" />
                </svg>
              )}

              <span>{filter.label}</span>

              {/* Active underline */}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-brown" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}