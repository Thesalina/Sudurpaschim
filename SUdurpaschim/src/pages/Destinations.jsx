import { useEffect, useState } from "react";
import PageHero from "../components/shared/PageHero";
import DestinationCard from "../components/shared/DestinationCard";
import { fetchDestinations } from "../lib/api";
import { siteVisuals } from "../data/siteData";

const categoryFilters = ["All", "Nature", "Trekking", "Wildlife", "Culture"];

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadDestinations() {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchDestinations({
          category: activeFilter,
          search: searchValue,
        });

        if (isMounted) {
          setDestinations(data);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message || "Failed to load destinations.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    const timeoutId = setTimeout(loadDestinations, 250);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
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
              Filter by theme or search by name and district to discover the mix of high trails, wetlands, hill towns, and pilgrimage sites.
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
          {isLoading
            ? "Loading places..."
            : `Showing ${destinations.length} place${destinations.length === 1 ? "" : "s"}`}
        </div>

        {error ? (
          <div className="mt-8 rounded-[1.6rem] border border-[#c76b4c]/18 bg-[#fff4ee] p-6 text-[#8a3e28]">
            {error}
          </div>
        ) : null}

        {!error && !isLoading ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <div key={destination.id} className="min-h-[320px]">
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        ) : null}

        {!error && !isLoading && destinations.length === 0 ? (
          <div className="mt-10 rounded-[1.6rem] border border-dashed border-[#173128]/18 bg-white/50 p-8 text-center text-[#4e564b]">
            No places matched that filter. Try another category or clear the search.
          </div>
        ) : null}
      </section>
    </>
  );
}
