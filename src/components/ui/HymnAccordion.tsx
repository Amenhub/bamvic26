import { useState } from "react";
import { hymns } from "../../data/hymns";

export default function HymnAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {hymns.map((hymn) => {
        const isOpen = openId === hymn.id;
        return (
          <div
            key={hymn.id}
            className="border border-brown/15 rounded-2xl overflow-hidden bg-white"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : hymn.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-ivory/50 transition-colors"
            >
              <div>
                <p className="font-serif text-lg md:text-xl text-brown">
                  {hymn.title}
                </p>
                {hymn.yorubaTitle && (
                  <p className="text-sm text-orange mt-1">{hymn.yorubaTitle}</p>
                )}
              </div>
              <span
                className={`text-orange text-2xl transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 grid md:grid-cols-2 gap-8 border-t border-brown/10 pt-6">
                {/* English */}
                <div>
                  <p className="text-orange text-[10px] uppercase tracking-[0.3em] mb-4">
                    English
                  </p>
                  <div className="space-y-4">
                    {hymn.verses.map((verse, i) => (
                      <p
                        key={i}
                        className="text-sm text-brown/80 whitespace-pre-line leading-relaxed"
                      >
                        {verse}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Yoruba */}
                {hymn.yorubaVerses && (
                  <div>
                    <p className="text-orange text-[10px] uppercase tracking-[0.3em] mb-4">
                      Yoruba
                    </p>
                    <div className="space-y-4">
                      {hymn.yorubaVerses.map((verse, i) => (
                        <p
                          key={i}
                          className="text-sm text-brown/80 whitespace-pre-line leading-relaxed"
                        >
                          {verse}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}