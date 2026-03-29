import { Link } from "react-router-dom";
import { siteVisuals } from "../../data/siteData";
import SectionHeading from "../shared/SectionHeading";

export default function FeatureSplit() {
  return (
    <section className="mx-auto -mt-8 grid max-w-[1400px] gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-[min(7vw,84px)]">
      <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(14,31,26,0.14)]">
        <img
          src={siteVisuals.tharu}
          alt="Visual of Sudurpashchim culture"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="self-center pt-4">
        <SectionHeading
          eyebrow="Why this matters"
          title={
            <>
              More than a destination,
              <br />
              a region to understand
            </>
          }
          description="Sudurpashchim holds geography, culture, livelihoods, and travel experiences that are often missing from mainstream conversations about Nepal. This site is built to make that region easier to understand."
        />
        <Link
          to="/about-region"
          className="mt-6 inline-flex rounded-full bg-[#de7d33] px-6 py-3.5 font-bold text-[#fff7eb] transition hover:-translate-y-0.5"
        >
          Read the regional overview
        </Link>
      </div>
    </section>
  );
}
