import { useState } from "react";
import PageHero from "../components/sections/PageHero";
import ProgrammeSection from "../components/sections/Programmesection";
import ProgrammeList from "../components/ui/ProgrammeList";
import {
  receptionOrder,
  churchOrderEnglish,
  churchOrderYoruba,
  photographyOrder,
  officiatingTeam,
  churchOfficers,
} from "../data/programme";

export default function Programme() {
  const [serviceLanguage, setServiceLanguage] = useState<"english" | "yoruba">("english");

  return (
    <>
      <PageHero
        eyebrow="Order of the Day"
        title="Programme"
        subtitle="7 November 2026"
        image="https://res.cloudinary.com/dskyahrkd/image/upload/v1788439237/DSC_1220_asoxrz.jpg"
      />
    
      <ProgrammeSection
        eyebrow="Our Saviour's Anglican Church, igbole-Ekiti"
        title="Officiating Ministers"
        background="ivory"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {officiatingTeam.map((member) => (
            <div
              key={member.name}
              className="text-center p-6 border border-brown/10 rounded-2xl bg-white"
            >
              <p className="text-orange text-[10px] uppercase tracking-[0.3em] mb-2">
                {member.role}
              </p>
              <p className="font-serif text-lg text-brown">{member.name}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-4 mt-8">
          {churchOfficers.map((officer) => (
            <div key={officer.name} className="text-center">
              <p className="text-orange text-[10px] uppercase tracking-[0.25em] mb-1">
                {officer.role}
              </p>
              <p className="text-sm text-brown/80">{officer.name}</p>
            </div>
          ))}
        </div>
      </ProgrammeSection>

      <ProgrammeSection
        eyebrow="The Ceremony"
        title="Order of Service"
        background="white"
      >
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full border border-brown/20 bg-ivory p-1">
            {(["english", "yoruba"] as const).map((language) => {
              const isActive = serviceLanguage === language;

              return (
                <button
                  key={language}
                  type="button"
                  onClick={() => setServiceLanguage(language)}
                  className={`rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-[0.35em] transition-colors ${
                    isActive
                      ? "bg-brown text-white"
                      : "text-brown/60 hover:text-brown"
                  }`}
                >
                  {language === "english" ? "English" : "Yoruba"}
                </button>
              );
            })}
          </div>
        </div>

        <ProgrammeList
          items={serviceLanguage === "english" ? churchOrderEnglish : churchOrderYoruba}
          language={serviceLanguage}
        />
      </ProgrammeSection>

      <ProgrammeSection
        eyebrow="Celebration"
        title="Reception Programme"
        background="white"
      >
        <ProgrammeList items={receptionOrder} />
      </ProgrammeSection>

      <ProgrammeSection
        eyebrow="Capturing Moments"
        title="Order of Photography"
        background="ivory"
      >
        <ol className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {photographyOrder.map((item, i) => (
            <li
              key={item}
              className="flex items-baseline gap-3 text-brown/80"
            >
              <span className="text-orange font-mono text-xs w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ol>
      </ProgrammeSection>

      <section className="bg-brown text-beige py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <p className="text-orange text-xs font-bold uppercase tracking-[0.5em]">
            Thank You
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Appreciation
          </h2>
          <div className="w-16 h-px bg-orange mx-auto" />
          <p className="text-beige/80 text-base md:text-lg leading-relaxed">
            We express our profound gratitude to Almighty God for making this
            day a success. To our families, friends, and well-wishers — we will
            be eternally grateful for the show of love and for taking out time
            to celebrate with us.
          </p>
          <p className="text-beige/80 text-base md:text-lg leading-relaxed">
            We pray that God will replenish your pockets and guide you as you
            travel back to your respective destinations. Amen!
          </p>
          <p className="font-script text-4xl md:text-5xl text-orange mt-4">
            Thanks for Coming
          </p>
        </div>
      </section>
    </>
  );
}