import { Link } from "react-router-dom";
import { facts, siteVisuals } from "../../data/siteData";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#10231c] px-5 pb-12 pt-32 text-[#fff3e3] sm:px-8 lg:px-[min(7vw,84px)]">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,15,13,0.82) 0%, rgba(7,15,13,0.52) 44%, rgba(7,15,13,0.28) 100%), linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.45)), url(${siteVisuals.heroLandscape})`,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-4 inline-block text-[0.8rem] font-extrabold uppercase tracking-[0.22em] text-[#e0ae72]">
            Know Sudurpashchim Better · Nepal
          </div>
          <h1 className="max-w-[8ch] font-[Cormorant_Garamond] text-[clamp(4.2rem,11vw,7.4rem)] leading-[0.92] tracking-[-0.04em]">
            Know
            <br />
            <em className="font-semibold italic text-[#e5a45e]">
              Sudurpashchim Better
            </em>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] text-[#fff3e3]/85">
            Explore the land, people, culture, and journeys of Nepal&apos;s far
            west. This platform is designed to help visitors and locals
            understand Sudurpashchim as a region, not just a destination.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/about-region"
              className="rounded-full bg-[#de7d33] px-6 py-3.5 font-bold text-[#fff7eb] transition hover:-translate-y-0.5"
            >
              Understand the region
            </Link>
            <Link
              to="/culture"
              className="rounded-full border border-white/40 bg-white/5 px-6 py-3.5 font-bold text-[#fff7eb] transition hover:-translate-y-0.5"
            >
              Explore culture
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:max-w-md">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md"
            >
              <div className="text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#e0ae72]">
                {fact.label}
              </div>
              <div className="mt-2 font-[Cormorant_Garamond] text-3xl leading-none text-white">
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
