import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "Event", to: "/events" },
  { label: "Bridal-Train", to: "/bridal-train" },
  { label: "Gallery", to: "/gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        bg-white/95 backdrop-blur-sm
        border-b border-beige
      "
      style={{
        backgroundImage: "url('/assets/nav-texture.png')",
        backgroundBlendMode: "overlay",
      }}
    >
      <nav
        className="
          mx-auto max-w-[1440px] h-[90px] md:h-[130px]
          flex items-center justify-between
          px-6 md:px-16
        "
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dskyahrkd/image/upload/v1789846435/logo_bnphvk.svg"
            alt="Bamvic '26"
            className="h-10 md:h-12 w-auto"
          />
          <span className="font-sans text-sm md:text-base font-medium tracking-[0.35em] text-brown uppercase">
            Bamvic&nbsp;'26
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.3em] transition-colors ${
                  isActive
                    ? "text-brown font-semibold"
                    : "text-brown/60 hover:text-brown"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Programme */}
          <Link
            to="/programme"
            className="
              ml-2 px-6 py-3
              bg-brown text-white
              text-xs uppercase tracking-[0.3em]
              hover:bg-orange transition-colors
            "
          >
            Programme
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brown text-2xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-beige px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.3em] ${
                  isActive ? "text-brown font-semibold" : "text-brown/60"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/programme"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block px-6 py-3 bg-brown text-white text-xs uppercase tracking-[0.3em] text-center"
          >
            Programme
          </Link>
        </div>
      )}
    </header>
  );
}