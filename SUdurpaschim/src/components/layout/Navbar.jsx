import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationLinks } from "../../data/siteData";

function navLinkClass({ isActive }) {
  return `transition ${isActive ? "text-white" : "text-[#ecdfc8]"}`;
}

export default function Navbar({ isScrolled = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 mx-auto mt-5 w-[calc(100%-20px)] max-w-[1100px] rounded-[2rem] border px-4 py-3 backdrop-blur-xl transition-all duration-300 md:w-[calc(100%-32px)] ${
        isScrolled
          ? "border-white/10 bg-[#0a1814]/90"
          : "border-white/15 bg-[#0a1814]/35"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex min-w-0 items-center gap-3 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-[#f8f2e7]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[#de7d33] text-sm font-extrabold text-[#fff7ea]">
            SP
          </span>
          <span className="truncate">Sudurpashchim</span>
          <span className="hidden rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.64rem] tracking-[0.18em] text-[#e7b16c] xl:inline-flex">
            Know Better
          </span>
        </Link>

        <div className="hidden items-center gap-4 text-[0.95rem] lg:flex">
          {navigationLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f8f2e7] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <div className="mt-4 grid gap-2 rounded-[1.4rem] border border-white/10 bg-[#10231c]/95 p-3 lg:hidden">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-[1rem] px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#de7d33] text-white"
                    : "text-[#ecdfc8] hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
