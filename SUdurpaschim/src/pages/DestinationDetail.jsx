import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DestinationCard from "../components/shared/DestinationCard";
import { fetchDestinationById, fetchDestinations } from "../lib/api";

export default function DestinationDetail() {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState(null);
  const [allDestinations, setAllDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadDestination() {
      try {
        setIsLoading(true);
        setError("");

        const [destinationData, allDestinationsData] = await Promise.all([
          fetchDestinationById(destinationId),
          fetchDestinations(),
        ]);

        if (isMounted) {
          setDestination(destinationData);
          setAllDestinations(allDestinationsData);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message || "Failed to load destination.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadDestination();

    return () => {
      isMounted = false;
    };
  }, [destinationId]);

  const relatedDestinations = useMemo(() => {
    if (!destination) {
      return [];
    }

    return allDestinations.filter((item) => destination.nearby?.includes(item.id));
  }, [allDestinations, destination]);

  if (isLoading) {
    return (
      <section className="px-5 pb-20 pt-36 sm:px-8 lg:px-[min(7vw,84px)]">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white/70 p-8 text-[#4e564b]">
          Loading destination...
        </div>
      </section>
    );
  }

  if (error || !destination) {
    return (
      <section className="px-5 pb-20 pt-36 sm:px-8 lg:px-[min(7vw,84px)]">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white/70 p-8">
          <h1 className="font-[Cormorant_Garamond] text-5xl text-[#173128]">
            Destination not found
          </h1>
          <p className="mt-4 text-[#4e564b]">
            {error || "This destination could not be loaded from the API."}
          </p>
          <Link
            to="/destinations"
            className="mt-6 inline-flex rounded-full bg-[#de7d33] px-5 py-3 font-semibold text-white"
          >
            Back to destinations
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 pb-20 pt-32 sm:px-8 lg:px-[min(7vw,84px)]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] bg-[#173128] shadow-[0_24px_70px_rgba(14,31,26,0.14)]">
            <img
              src={destination.image}
              alt={destination.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="self-center">
            <div className="mb-4 inline-block rounded-full bg-[#173128]/8 px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#173128]">
              {destination.tag}
            </div>
            <h1 className="font-[Cormorant_Garamond] text-[clamp(3.5rem,7vw,5.5rem)] leading-[0.94] text-[#173128]">
              {destination.name}
            </h1>
            <p className="mt-5 text-lg text-[#4e564b]">{destination.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoCard label="Location" value={destination.location} />
              <InfoCard label="Best time" value={destination.bestTime} />
              <InfoCard label="Difficulty" value={destination.difficulty} />
              <InfoCard label="Stay style" value={destination.stay} />
            </div>

            <div className="mt-4 rounded-[1.4rem] border border-[#173128]/10 bg-white/70 p-5">
              <div className="text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#d79556]">
                How to reach
              </div>
              <div className="mt-2 text-[#173128]">{destination.reach}</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#173128]/10 bg-white/70 p-7 shadow-[0_18px_44px_rgba(16,35,28,0.05)]">
            <div className="text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#d79556]">
              What makes it special
            </div>
            <h2 className="mt-3 font-[Cormorant_Garamond] text-[clamp(2.4rem,4vw,3.5rem)] leading-[0.96] text-[#173128]">
              Why {destination.name} matters in the story of the region
            </h2>
            <p className="mt-5 text-[#4e564b]">{destination.special}</p>
          </div>

          <div className="rounded-[2rem] border border-[#173128]/10 bg-white/70 p-7 shadow-[0_18px_44px_rgba(16,35,28,0.05)]">
            <div className="text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#d79556]">
              Highlights
            </div>
            <div className="mt-5 grid gap-4">
              {destination.highlights.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.3rem] border border-[#173128]/8 bg-white/70 p-5 text-[#4e564b]"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-6 text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#d79556]">
            Gallery
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {destination.gallery.map((image, index) => (
              <div
                key={`${destination.id}-gallery-${index}`}
                className={`overflow-hidden rounded-[1.8rem] bg-[#173128] shadow-[0_16px_40px_rgba(16,35,28,0.08)] ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${destination.name} view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-[linear-gradient(135deg,#163128_0%,#214135_100%)] p-8 text-white shadow-[0_20px_50px_rgba(16,35,28,0.18)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#efb16c]">
                Keep exploring
              </div>
              <h2 className="mt-3 font-[Cormorant_Garamond] text-[clamp(2.4rem,4vw,3.6rem)] leading-[0.96]">
                Use places like {destination.name} to understand the wider province
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                Each destination on this site is part of a larger regional story
                about geography, movement, culture, and underrepresented local identity.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about-region"
                className="rounded-full bg-[#de7d33] px-6 py-3.5 font-semibold text-white"
              >
                Read about the region
              </Link>
              <Link
                to="/travel-guide"
                className="rounded-full border border-white/15 bg-white/8 px-6 py-3.5 font-semibold text-white"
              >
                Open travel guide
              </Link>
            </div>
          </div>
        </div>

        {relatedDestinations.length > 0 ? (
          <div className="mt-12">
            <div className="mb-6 text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[#d79556]">
              Related places
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedDestinations.map((item) => (
                <div key={item.id} className="min-h-[320px]">
                  <DestinationCard destination={item} />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10">
          <Link
            to="/destinations"
            className="inline-flex rounded-full bg-[#de7d33] px-5 py-3 font-semibold text-white"
          >
            Back to all places
          </Link>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.4rem] border border-[#173128]/10 bg-white/70 p-5">
      <div className="text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[#d79556]">
        {label}
      </div>
      <div className="mt-2 text-[#173128]">{value}</div>
    </div>
  );
}
