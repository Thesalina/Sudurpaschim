import { Link } from "react-router-dom";

export default function ContactBanner() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-[min(7vw,84px)]">
      <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#163128_0%,#214135_100%)] px-5 py-10 text-[#fff6ea] sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute bottom-[-0.4rem] right-8 font-[Cormorant_Garamond] text-[clamp(4rem,11vw,8rem)] leading-none text-white/5">
          सुदूर
        </div>
        <div className="relative z-10">
          <div className="mb-4 inline-block text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#efb16c]">
            Stay connected to the wild
          </div>
          <h2 className="font-[Cormorant_Garamond] text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.03em] text-[#fff5e8]">
            Ready to explore Sudurpashchim?
          </h2>
          <p className="mt-5 max-w-2xl text-[#fff5e8]/80">
            Finish the frontend first, then connect this to your Express API and
            MongoDB-backed contact workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#de7d33] px-6 py-3.5 font-bold text-[#fff7eb]"
            >
              Open contact page
            </Link>
            <Link
              to="/destinations"
              className="rounded-full border border-white/15 bg-white/8 px-6 py-3.5 font-semibold text-white"
            >
              See destinations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
