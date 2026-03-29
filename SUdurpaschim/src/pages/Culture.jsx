import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { cultureItems, siteVisuals } from "../data/siteData";

export default function Culture() {
  return (
    <>
      <PageHero
        eyebrow="Culture and lifestyle"
        title="The Living Cultural Identity of Sudurpashchim"
        description="Understand the rituals, music, community memory, and everyday traditions that shape how the far west is experienced and remembered."
        image={siteVisuals.gaura}
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <SectionHeading
          eyebrow="Cultural pillars"
          title="Festivals, song, and belonging"
          description="This page is meant to help people know Sudurpashchim better through identity, not only scenery. Later, each card can become a full article or database-backed story."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cultureItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.6rem] bg-white/70 shadow-[0_18px_44px_rgba(16,35,28,0.08)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[1.15/0.95] w-full object-cover"
              />
              <div className="p-6">
                <h2 className="font-[Cormorant_Garamond] text-4xl text-[#173128]">
                  {item.title}
                </h2>
                <p className="mt-3 text-[#4e564b]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
