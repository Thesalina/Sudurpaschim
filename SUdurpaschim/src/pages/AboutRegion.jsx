import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { regionHighlights, siteVisuals } from "../data/siteData";

export default function AboutRegion() {
  return (
    <>
      <PageHero
        eyebrow="Regional overview"
        title="Know the Land Behind the Name"
        description="Sudurpashchim is not only a far-western province on a map. It is a layered region of plains, hills, mountain corridors, memory, and underrepresented stories."
        image={siteVisuals.tharu}
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <SectionHeading
          eyebrow="Why this page matters"
          title="A stronger understanding of the region"
          description="This section gives the site a broader purpose. It helps visitors, students, and future clients see Sudurpashchim as a place to study, appreciate, and travel through."
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
