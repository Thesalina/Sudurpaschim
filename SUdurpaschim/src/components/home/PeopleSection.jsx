import { peopleItems } from "../../data/siteData";
import SectionHeading from "../shared/SectionHeading";

export default function PeopleSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-[min(7vw,84px)]">
      <SectionHeading eyebrow="Stories" title="Lifestyle and People" />

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {peopleItems.map((person) => (
          <article
            key={person.label}
            className="group relative min-h-[320px] overflow-hidden rounded-[1.6rem] bg-[#1a332a] xl:min-h-[360px]"
          >
            <img
              src={person.image}
              alt={person.label}
              className="h-full w-full object-cover saturate-90 transition duration-500 group-hover:scale-105 group-hover:saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1611]/5 to-[#0b1611]/80" />
            <div className="absolute inset-x-5 bottom-5 z-10 font-[Cormorant_Garamond] text-[1.8rem] leading-none text-[#fff8ef]">
              {person.label}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
