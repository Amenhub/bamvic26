import { Link } from "react-router-dom";

export default function DonationCTA() {
  return (
    <section className="bg-white py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 md:gap-10">
        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-orange leading-tight">
          Send a Gift
        </h2>

        {/* Body */}
        <p className="text-base md:text-xl text-brown/60 leading-relaxed max-w-2xl">
          Your presence is the greatest gift of all. But if you&rsquo;d like to
          bless us with something more, we&rsquo;ve made it easy to send a
          love gift. Thank you for celebrating with us.
        </p>

        {/* Button */}
        <Link
          to="/donate"
          className="
            mt-4 inline-block
            px-10 md:px-14 py-5 md:py-6
            bg-brown text-beige
            rounded-full
            text-xs md:text-sm font-bold uppercase tracking-[0.3em]
            shadow-[0_15px_40px_-10px_rgba(59,35,20,0.4)]
            hover:bg-brown-dark hover:shadow-[0_20px_50px_-10px_rgba(59,35,20,0.5)]
            transition-all duration-300
          "
        >
          Give a Love Gift
        </Link>
      </div>
    </section>
  );
}