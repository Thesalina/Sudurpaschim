import { Link } from "react-router-dom";
import { siteVisuals } from "../../data/siteData";

export default function FestivalSection({ culturePosts = [] }) {
  const featuredPost = culturePosts.find((post) =>
    post.title?.toLowerCase().includes("gaura")
  );

  const title = featuredPost?.title || "Gaura Parva";
  const description =
    featuredPost?.description ||
    "Across the far west, Gaura binds ritual, devotion, music, and community. It is one of the strongest anchors of Sudurpashchim's identity and a powerful cultural story for this site.";
  const image = featuredPost?.image || siteVisuals.gaura;

  return (
    <section className="mx-auto grid max-w-[1400px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-[min(7vw,84px)]">
      <div className="self-center">
        <div className="mb-4 inline-block text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#d79556]">
          Annual celebration
        </div>
        <h2 className="font-[Cormorant_Garamond] text-[clamp(3rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-[#173128]">
          The Soul of
          <br />
          <em className="font-semibold italic text-[#e5a45e]">{title}</em>
        </h2>
        <p className="mt-5 max-w-xl text-base text-[#4e564b]">{description}</p>
        <Link
          to="/culture"
          className="mt-6 inline-flex rounded-full bg-[#de7d33] px-6 py-3.5 font-bold text-[#fff7eb] transition hover:-translate-y-0.5"
        >
          Read culture highlights
        </Link>
      </div>

      <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(14,31,26,0.14)] sm:min-h-[500px]">
        <img src={image} alt={`${title} visual`} className="h-full w-full object-cover" />
        <div className="absolute left-6 top-6 rounded-2xl bg-[#efb06c]/95 px-4 py-3 font-extrabold text-[#173128]">
          <span className="block text-base">August</span>
          <span className="block text-[0.72rem] uppercase tracking-[0.12em]">
            Every year
          </span>
        </div>
      </div>
    </section>
  );
}
