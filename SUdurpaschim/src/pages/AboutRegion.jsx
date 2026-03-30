import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import {
  districtHighlights,
  regionHighlights,
  regionOverviewCards,
  siteVisuals,
} from "../data/siteData";

export default function AboutRegion() {
  return (
    <>
      <PageHero
        eyebrow="Regional overview"
        title="Understand Sudurpashchim as a Region"
        description="Learn the geography, districts, language, and identity of Nepal&apos;s far west before you plan routes."
        image={siteVisuals.tharu}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <SectionHeading
          eyebrow="Regional foundation"
          title="What to know first"
          description="Landscapes, people, language, districts, and why Sudurpashchim matters."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {regionOverviewCards.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.6rem] border border-[#173128]/10 bg-white/70 p-6 shadow-[0_18px_44px_rgba(16,35,28,0.05)]"
            >
              <h2 className="font-[Cormorant_Garamond] text-4xl text-[#173128]">
                {item.title}
              </h2>
              <p className="mt-3 text-[#4e564b]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#163128_0%,#214135_100%)] p-8 text-white shadow-[0_20px_50px_rgba(16,35,28,0.16)]">
            <div className="text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#efb16c]">
              District perspective
            </div>
            <h2 className="mt-3 font-[Cormorant_Garamond] text-[clamp(2.4rem,4vw,3.8rem)] leading-[0.96]">
              The province is not one single story
            </h2>
            <p className="mt-4 text-white/78">
              Sudurpashchim becomes easier to understand when viewed district by district.
              Gateway cities, wildlife belts, hill settlements, and mountain frontiers all
              contribute to the regional identity.
            </p>
          </div>

          <div className="grid gap-4">
            {districtHighlights.map((item) => (
              <article
                key={item}
                className="rounded-[1.4rem] border border-[#173128]/10 bg-white/70 p-5 text-[#4e564b]"
              >
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-[min(7vw,84px)]">
        <SectionHeading
          eyebrow="Why the region deserves attention"
          title="A place to know, not only to visit"
          description="These points explain why Sudurpashchim deserves attention beyond tourism checklists."
        />
        <div className="mt-10 grid gap-4">
          {regionHighlights.map((item) => (
            <article
              key={item}
              className="rounded-[1.5rem] border border-[#173128]/10 bg-white/70 p-6 text-[#4e564b]"
            >
              {item}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
