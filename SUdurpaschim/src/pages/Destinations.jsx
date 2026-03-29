import { useMemo, useState } from "react";
import { destinationItems, siteVisuals } from "../data/siteData";
import DestinationCard from "../components/shared/DestinationCard";
import PageHero from "../components/shared/PageHero";

const categoryFilters = ["All", "Nature", "Trekking", "Wildlife", "Culture"];

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const filteredDestinations = useMemo(() => {
    return destinationItems.filter((destination) => {
      const matchesFilter =
        activeFilter === "All" || destination.category === activeFilter;
      const matchesSearch =
        destination.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        destination.location.toLowerCase().includes(searchValue.toLowerCase()) ||
        destination.sub.toLowerCase().includes(searchValue.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchValue]);

  return (
    <>
      <PageHero
        eyebrow="Explore places"
        title="Journeys Through the Landscapes of Sudurpashchim"
        description="Browse mountains, reserves, hill towns, and remote valleys to understand how geography shapes the identity of Nepal's far west."
        image={siteVisuals.heroLandscape}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-[min(7vw,84px)]">
        <div className="grid gap-6 rounded-[2rem] border border-[#173128]/10 bg-white/60 p-6 shadow-[0_18px_44px_rgba(16,35,28,0.05)] lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#d79556]">
              Discover by theme
            </div>
            <h2 className="mt-3 font-[Cormorant_Garamond] text-[clamp(2.8rem,5vw,4.2rem)] leading-[0.95] text-[#173128]">
              Find places by landscape and story
            </h2>
            <p className="mt-4 max-w-2xl text-[#4e564b]">
              Use filters to move through nature, trekking, wildlife, and
              culture-linked places. This is the same structure you can later
              back with API data and database categories.
            </p>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#173128]">
              Search places
            </span>
            <input
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search by name or district"
              className="w-full min-w-[260px] rounded-full border border-[#173128]/12 bg-white px-5 py-3.5 text-[#173128] outline-none placeholder:text-[#173128]/45"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categoryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-[#173128] text-white"
                  : "border border-[#173128]/12 bg-white/70 text-[#173128]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-4 text-sm text-[#4e564b]">
          Showing {filteredDestinations.length} place
          {filteredDestinations.length === 1 ? "" : "s"}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="min-h-[320px]">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="mt-10 rounded-[1.6rem] border border-dashed border-[#173128]/18 bg-white/50 p-8 text-center text-[#4e564b]">
            No places matched that filter. Try another category or clear the search.
          </div>
        ) : null}
      </section>
    </>
  );
}
