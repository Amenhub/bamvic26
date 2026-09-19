import { Link } from "react-router-dom";

const links = [
  {
    eyebrow: "The Beginning",
    title: "Our Story",
    to: "/our-story",
    image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439185/DSC_1036_jy7ehk.jpg",
  },
  {
    eyebrow: "The Day",
    title: "Programme",
    to: "/programme",
    image: "./images/Programme.png",
    offset: true,
  },
  {
    eyebrow: "Our Moments",
    title: "Gallery",
    to: "/gallery",
    image: "https://res.cloudinary.com/dskyahrkd/image/upload/v1788439231/DSC_1205_kxgodc.jpg",
  },
  {
    eyebrow: "Join Us",
  title: "Bridal Train",
    to: "/bridal-train",
    image: "/images/bridal-train.jpg",
    offset: true,
  },
];

export default function QuickLinks() {
  return (
    <section className="bg-white border-y border-beige py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1152px] mx-auto flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-orange text-xs font-bold uppercase tracking-[7.2px]">
            On The Big Day
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brown text-center">
            Guest Quick Links
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              className={`
                group relative flex flex-col justify-end
                w-full md:w-[272px] h-[416px]
                p-8 rounded-2xl overflow-hidden
                bg-brown
                ${link.offset ? "md:mt-12" : ""}
              `}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity"
                style={{ backgroundImage: `url(${link.image})` }}
              />
              <div className="relative z-10 flex flex-col gap-2">
                <p className="text-white/70 text-[10px] uppercase tracking-[3px]">
                  {link.eyebrow}
                </p>
                <h3 className="font-serif text-3xl text-white">
                  {link.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}