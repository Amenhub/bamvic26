import { useCountdown } from "../../hooks/useCountdown";
import { weddingConfig } from "../../data/weddingConfig";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(weddingConfig.weddingDate);

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <section className="bg-white py-20 md:py-24 px-6 md:px-16">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16 max-w-[1152px]">
        {units.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-8 md:gap-16">
            {/* Number + label */}
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="font-sans font-light text-6xl md:text-7xl lg:text-8xl text-orange tabular-nums leading-none">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brown/40">
                {unit.label}
              </span>
            </div>

            {/* Separator dot (skip after last) */}
            {index < units.length - 1 && (
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-beige" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}