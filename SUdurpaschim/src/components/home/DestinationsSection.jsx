import { Link } from "react-router-dom";
import DestinationCard from "../shared/DestinationCard";
import SectionHeading from "../shared/SectionHeading";

export default function DestinationsSection({
  destinations = [],
  isLoading = false,
  error = "",
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-[min(7vw,84px)]">
      <SectionHeading
        eyebrow="Explore places"
        title="Landscapes of Sudurpashchim"
        description="Mountains, reserves, hill towns, and remote valleys provide an entry point into the wider identity of the province."
      />

      {isLoading ? (
        <div className="mt-10 rounded-[1.6rem] bg-white/70 p-6 text-[#4e564b]">
          Loading featured places...
        </div>
      ) : null}

      {error ? (
        <div className="mt-10 rounded-[1.6rem] border border-[#c76b4c]/18 bg-[#fff4ee] p-6 text-[#8a3e28]">
          {error}
        </div>
      ) : null}

      {!isLoading && !error ? (
        <div className="mt-10 grid auto-rows-[250px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              featured={index === 0}
            />
          ))}
        </div>
      ) : null}

      <div className="mt-8">
        <Link
          to="/destinations"
          className="inline-flex rounded-full border border-[#173128]/14 px-5 py-3 font-semibold text-[#173128]"
        >
          Explore all places
        </Link>
      </div>
    </section>
  );
}
