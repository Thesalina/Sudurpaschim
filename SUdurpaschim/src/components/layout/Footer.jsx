import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#10231c] px-5 pb-10 pt-6 text-[#ecdfc8] sm:px-8 lg:px-[min(7vw,84px)]">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-8 border-b border-white/8 py-8 lg:flex-row">
          <div className="max-w-md">
            <div className="font-[Cormorant_Garamond] text-[2.2rem] text-[#fff5e8]">
              Sudurpashchim
            </div>
            <p className="mt-3 text-[#ecdfc8]/72">
              A personal MERN portfolio project focused on tourism, culture, and
              regional storytelling in far-western Nepal.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <div className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#e5a45e]">
                Explore
              </div>
              <ul className="space-y-2">
                <li>
                  <Link to="/destinations">Destinations</Link>
                </li>
                <li>
                  <Link to="/culture">Culture</Link>
                </li>
                <li>
                  <Link to="/travel-guide">Travel Guide</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#e5a45e]">
                Project
              </div>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-region">About the region</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 text-sm text-[#ecdfc8]/62">
          © 2025 Sudurpashchim Tourism · Frontend scaffold for a MERN portfolio
          build
        </div>
      </div>
    </footer>
  );
}
