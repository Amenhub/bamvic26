import { useState } from "react";
import { hymns } from "../../data/hymns";
import type { ContentBlock, ProgrammeItem } from "../../data/programme";

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-brown/80 leading-relaxed">{block.text}</p>;

    case "yoruba":
      return (
        <p className="text-brown/70 leading-relaxed italic border-l-2 border-orange/30 pl-4">
          {block.text}
        </p>
      );

    case "note":
      return (
        <p className="text-[10px] uppercase tracking-[0.25em] text-orange/80">
          {block.text}
        </p>
      );

    case "dialogue":
      return (
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-orange">
            {block.speaker}
          </span>
          <p className="text-brown/85 leading-relaxed">{block.text}</p>
        </div>
      );

    case "verse":
      return (
        <p className="text-brown/80 whitespace-pre-line leading-relaxed font-serif">
          {block.text}
        </p>
      );
  }
}

function getHymnBlocks(
  item: ProgrammeItem,
  language: "english" | "yoruba",
): ContentBlock[] | undefined {
  const hymnAliasMap: Record<string, string> = {
    "orin-akowole": "hymn-1",
    "orin-keji": "hymn-2",
    "orin-keta": "hymn-3",
    "orin-kerin": "hymn-4",
    "orin-karun": "hymn-5",
    "orin-akojade": "hymn-6",
  };

  const normalizedItemId = item.id.toLowerCase();
  const hymn = hymns.find((entry) => {
    if (entry.id.toLowerCase() === (hymnAliasMap[normalizedItemId] ?? normalizedItemId)) {
      return true;
    }

    const itemTitle = item.title.toLowerCase();
    const itemNote = item.note?.toLowerCase() ?? "";
    const haystack = `${itemNote} ${itemTitle}`;

    return (
      entry.title.toLowerCase() === itemTitle ||
      entry.yorubaTitle?.toLowerCase() === itemTitle ||
      haystack.includes(entry.title.toLowerCase()) ||
      (entry.yorubaTitle && haystack.includes(entry.yorubaTitle.toLowerCase()))
    );
  });

  if (!hymn) return undefined;

  const blocks: ContentBlock[] = [];
  const verses =
    language === "yoruba" && hymn.yorubaVerses?.length ? hymn.yorubaVerses : hymn.verses;

  blocks.push({
    type: "note",
    text:
      language === "yoruba" && hymn.yorubaTitle ? hymn.yorubaTitle : hymn.title,
  });

  for (const verse of verses) {
    blocks.push({ type: "verse", text: verse });
  }

  return blocks;
}

export default function ProgrammeList({
  items,
  language = "english",
}: {
  items: ProgrammeItem[];
  language?: "english" | "yoruba";
}) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <ol className="space-y-6">
      {items.map((item, i) => {
        const hymnBlocks = getHymnBlocks(item, language);
        const blocks =
          item.content && item.content.length > 0 ? item.content : hymnBlocks ?? [];
        const key = item.id ?? `${item.title}-${i}`;
        const isOpen = openKey === key;

        return (
          <li
            key={key}
            className="py-5 border-b border-brown/10 last:border-0"
          >
            <div className="flex items-start gap-6">
              <span className="text-orange font-mono text-sm md:text-base shrink-0 w-8 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <h3 className="font-serif text-lg md:text-xl text-brown">
                  {item.title}
                </h3>

                {item.note && !item.content?.length && !hymnBlocks && (
                  <p className="text-sm text-brown/60 italic mt-1">{item.note}</p>
                )}

                {blocks.length > 0 && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      className="inline-flex items-center gap-2 rounded-full border border-brown/15 bg-ivory px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brown transition hover:border-brown/40"
                    >
                      {isOpen ? "Hide details" : "View details"}
                    </button>

                    {isOpen && (
                      <div className="mt-4 space-y-3 rounded-2xl border border-brown/10 bg-[#f9f5f0] p-4 md:p-6">
                        {blocks.map((block, blockIndex) => (
                          <Block key={`${key}-${blockIndex}`} block={block} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
