import { sanctuaryItems } from "../../data/siteData";
import SectionHeading from "../shared/SectionHeading";

export default function SanctuarySection() {
  return (
    <section className="bg-gradient-to-b from-[#1a3a2a]/8 to-transparent py-4">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-[min(7vw,84px)]">
        <SectionHeading eyebrow="Protected lands" title="Sanctuaries of the West" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {sanctuaryItems.map((sanctuary) => (
            <article
              key={sanctuary.name}
              className="overflow-hidden rounded-[1.5rem] bg-[#18362c] text-[#f7f0e2] shadow-[0_14px_32px_rgba(14,31,26,0.1)]"
            >
              <div className="aspect-[1.15/0.95] overflow-hidden">
                <img
                  src={sanctuary.image}
                  alt={sanctuary.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#e5a45e]">
                  {sanctuary.type}
                </div>
                <div className="mt-2 font-[Cormorant_Garamond] text-[2rem] leading-none">
                  {sanctuary.name}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
