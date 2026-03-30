import PageHero from "../components/shared/PageHero";
import { seasonItems, siteVisuals, travelGuideSections } from "../data/siteData";

export default function TravelGuide() {
  return (
    <>
      <PageHero
        eyebrow="Travel guide"
        title="Plan a Practical Journey Through Sudurpashchim"
        description="This page is about logistics and preparation: when to go, how to reach the region, where to stay, and what to keep in mind while traveling."
        image={siteVisuals.heroLandscape}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#163128_0%,#214135_100%)] p-8 text-white shadow-[0_20px_50px_rgba(16,35,28,0.16)]">
            <div className="text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#efb16c]">
              Practical purpose
            </div>
            <h2 className="mt-3 font-[Cormorant_Garamond] text-[clamp(2.4rem,4vw,3.8rem)] leading-[0.96]">
              This page should help someone actually plan
            </h2>
            <p className="mt-4 text-white/78">
              Travel Guide is the action page. It should reduce confusion around timing,
              transport, stay options, costs, and trip preparation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {travelGuideSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.4rem] border border-[#173128]/10 bg-white/70 p-6"
              >
                <h2 className="font-[Cormorant_Garamond] text-4xl text-[#173128]">
                  {section.title}
                </h2>
                <p className="mt-3 text-[#4e564b]">{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-[min(7vw,84px)]">
        <div className="mb-6 text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#d79556]">
          Best season to visit
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
      </section>
    </>
  );
}
