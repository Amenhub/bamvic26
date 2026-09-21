import { motion } from "framer-motion";
import PageHero from "../components/sections/PageHero";
import StoryChapter from "../components/sections/StoryChapter";
import { storyChapters } from "../data/story";

export default function OurStory() {
  return (
    <>
      <PageHero
        eyebrow="Where It All Began"
        title="Our Story"
        subtitle="Ayobami & Israel"
        image="/images/story/hero.jpg"
      />

      {/* Timeline */}
      <section className="bg-[#F5EFE6] py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto relative">
          {/* Central spine — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-32 bottom-32 w-px bg-brown/15"
            aria-hidden="true"
          />

          {/* Chapters */}
          <div className="flex flex-col gap-24 md:gap-32">
            {storyChapters.map((chapter, index) => (
              <StoryChapter key={chapter.id} chapter={chapter} index={index} />
            ))}
          </div>

          {/* Closing chapter marker on spine */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%-100px)] hidden md:flex z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-full bg-orange flex items-center justify-center shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing chapter — full-width */}
      <section className="bg-white pb-20 md:pb-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <p className="text-orange text-xs font-bold uppercase tracking-[0.5em]">
            Forever Starts Now
          </p>
          <h2 className="font-serif italic text-4xl md:text-6xl text-brown">
            The New Chapter
          </h2>

          <div className="mt-8 w-full rounded-3xl bg-[#F5EFE6] border border-beige/60 px-6 md:px-14 py-12 md:py-16 flex flex-col gap-6 text-brown/80 leading-relaxed">
            <p className="text-base md:text-lg">
              And now, they stand at the beginning of their greatest chapter
              yet. <span className="text-brown font-semibold">Marriage.</span>
            </p>
            <p className="text-base md:text-lg">
              For them, marriage is more than a wedding day; it is choosing
              each other every day — in the easy moments and the difficult
              ones. Choosing friendship, patience, laughter, and faith.
            </p>

            <div className="w-full h-px bg-brown/10 my-4" />

            <p className="font-serif italic text-lg md:text-2xl text-orange leading-relaxed">
              &ldquo;The teacher and his student became friends.
              <br />
              The friends became lovers.
              <br />
              And now, the lovers are becoming one.&rdquo;
            </p>

            <div className="w-full h-px bg-brown/10 my-4" />

            <p className="text-base md:text-lg">
              This is not the end of their love story. It is the beginning of
              their forever.{" "}
              <span className="text-orange inline-block" aria-hidden="true">
                &#10084;
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}