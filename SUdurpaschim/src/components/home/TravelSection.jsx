import { Link } from "react-router-dom";
import { seasonItems } from "../../data/siteData";

export default function TravelSection() {
  return (
    <section className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-[min(7vw,84px)]">
      <div className="self-start lg:sticky lg:top-28">
        <div className="mb-4 inline-block text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#d79556]">
          Plan your journey
        </div>
        <h2 className="font-[Cormorant_Garamond] text-[clamp(3rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-[#173128]">
          Plan Your Journey
          <br />
          <em className="font-semibold italic text-[#e5a45e]">to the West</em>
        </h2>
        <p className="mt-5 max-w-xl text-base text-[#4e564b]">
          This section previews the later travel-guide page: season choice,
          access through Dhangadhi, safari or trekking priorities, and how
          visitors can combine culture with nature.
        </p>
        <Link
          to="/travel-guide"
          className="mt-6 inline-flex rounded-full bg-[#de7d33] px-6 py-3.5 font-bold text-[#fff7eb] transition hover:-translate-y-0.5"
        >
          Open travel guide
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {seasonItems.map((season) => (
          <article
            key={season.months}
            className="rounded-[1.4rem] border border-[#173128]/10 bg-white/70 p-6 backdrop-blur-md"
          >
            <div className="font-extrabold text-[#173128]">{season.label}</div>
            <div className="mt-1 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-[#de7d33]">
              {season.months}
            </div>
            <div className="mt-3 text-[#4e564b]">{season.desc}</div>
            <div className="mt-4 flex gap-2">
              {Array.from({ length: 5 }, (_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`h-2.5 w-2.5 rounded-full ${
                    dotIndex < season.rating ? "bg-[#de7d33]" : "bg-[#173128]/15"
                  }`}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
