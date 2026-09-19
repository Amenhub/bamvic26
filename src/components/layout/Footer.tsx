import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-brown text-beige">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24 py-20 md:py-32 flex flex-col items-center gap-10 md:gap-14">

        {/* Logo in a circle */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-beige border-2 border-orange flex items-center justify-center">
          <img
            src={logo}
            alt="Bamvic '26"
            className="w-12 h-8 md:w-14 md:h-9"
          />
        </div>

        {/* Couple names */}
        <h2 className="font-serif text-4xl md:text-6xl text-beige text-center tracking-wide">
          Ayobami &amp; Israel
        </h2>

        {/* Date + Location */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-beige/70 text-center">
          November 7, 2026 &nbsp;•&nbsp; Igboole, Ekiti State
        </p>

        {/* Hashtag */}
        <p className="font-bold text-sm md:text-base uppercase tracking-[0.3em] text-orange">
          #BAMVIC26
        </p>

        {/* Divider */}
        <div className="w-full max-w-[900px] border-t border-beige/20 my-4" />

        {/* Copyright */}
        <p className="text-[10px] uppercase tracking-[0.3em] text-beige/40 text-center">
          © 2026 Bamvic Wedding. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}