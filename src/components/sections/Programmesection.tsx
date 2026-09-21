import type { ReactNode } from "react";

type ProgrammeSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  background?: "white" | "ivory";
  children: ReactNode;
};

export default function ProgrammeSection({
  eyebrow,
  title,
  subtitle,
  background = "white",
  children,
}: ProgrammeSectionProps) {
  return (
    <section
      className={`py-20 md:py-28 px-6 md:px-16 ${
        background === "ivory" ? "bg-ivory" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-orange text-xs font-bold uppercase tracking-[0.5em]">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-brown leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-brown/60 text-sm uppercase tracking-[0.3em]">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-px bg-orange mt-2" />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}