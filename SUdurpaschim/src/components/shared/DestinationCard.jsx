import { Link } from "react-router-dom";

export default function DestinationCard({ destination, featured = false }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.8rem] bg-[#1f3028] shadow-[0_16px_40px_rgba(16,35,28,0.12)] ${
        featured ? "md:col-span-2 xl:row-span-2" : ""
      }`}
    >
      <img
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        src={destination.image}
        alt={destination.name}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1611]/5 to-[#0b1611]/80" />
      <div className="absolute inset-x-5 bottom-5 z-10">
        <span className="mb-3 inline-block rounded-full bg-[#f3e5ca]/15 px-3 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-[#f6e5c9]">
          {destination.tag}
        </span>
        <div className="font-[Cormorant_Garamond] text-[2rem] leading-none text-[#fff8ef] sm:text-[2.2rem]">
          {destination.name}
        </div>
        <div className="mt-1 text-sm text-[#fff7eb]/80">{destination.sub}</div>
      </div>
      <Link
        to={`/destinations/${destination.id}`}
        className="absolute bottom-5 right-5 z-10 rounded-full bg-[#de7d33] px-4 py-2 text-sm font-bold text-[#fff8ef] opacity-0 transition duration-300 group-hover:opacity-100"
      >
        View details
      </Link>
    </article>
  );
}
