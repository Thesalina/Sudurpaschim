import PageHero from "../components/shared/PageHero";
import { seasonItems, siteVisuals } from "../data/siteData";

export default function TravelGuide() {
  return (
    <>
      <PageHero
        eyebrow="Travel guide"
        title="Travel Through Sudurpashchim With More Context"
        description="This guide connects practical planning with a deeper regional understanding, so journeys feel informed rather than rushed."
        image={siteVisuals.heroLandscape}
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-[Cormorant_Garamond] text-5xl text-[#173128]">
              Travel with better regional awareness
            </h2>
            <p className="mt-5 text-[#4e564b]">
              The guide page is where transport, season, accommodation, and
              safety advice meet the broader identity of the region. Later, this
              can expand into route plans and district-level travel notes.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {seasonItems.map((season) => (
              <article
                key={season.months}
                className="rounded-[1.4rem] border border-[#173128]/10 bg-white/70 p-6"
              >
                <div className="font-extrabold text-[#173128]">{season.label}</div>
                <div className="mt-1 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-[#de7d33]">
                  {season.months}
                </div>
                <p className="mt-3 text-[#4e564b]">{season.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
