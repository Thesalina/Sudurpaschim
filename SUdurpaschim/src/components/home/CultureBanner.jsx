import { Link } from "react-router-dom";
import { siteVisuals } from "../../data/siteData";
import SectionHeading from "../shared/SectionHeading";

export default function CultureBanner({ culturePosts = [] }) {
  const featuredPost = culturePosts[0];
  const bannerImage = featuredPost?.image || siteVisuals.gaura;
  const description =
    featuredPost?.description ||
    "Gaura Parva, Deuda folk singing, Tharu identity, and regional food traditions make the province feel culturally distinct at every stop.";

  return (
    <section className="relative overflow-hidden bg-[#11241d] px-5 py-28 sm:px-8 lg:px-[min(7vw,84px)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(11,22,17,0.82), rgba(11,22,17,0.4)), url(${bannerImage})`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Living traditions"
          title={
            <>
              The Heart of the West:
              <br />
              <em className="font-semibold italic text-[#e5a45e]">Our Culture</em>
            </>
          }
          description={description}
          light
        />
        <Link
          to="/culture"
          className="mt-6 inline-flex rounded-full bg-[#de7d33] px-6 py-3.5 font-bold text-[#fff7eb] transition hover:-translate-y-0.5"
        >
          Explore culture
        </Link>
      </div>
    </section>
  );
}
