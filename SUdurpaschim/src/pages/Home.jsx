import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import FeatureSplit from "../components/home/FeatureSplit";
import DestinationsSection from "../components/home/DestinationsSection";
import SanctuarySection from "../components/home/SanctuarySection";
import CultureBanner from "../components/home/CultureBanner";
import FestivalSection from "../components/home/FestivalSection";
import PeopleSection from "../components/home/PeopleSection";
import TravelSection from "../components/home/TravelSection";
import ContactBanner from "../components/home/ContactBanner";
import { fetchCulturePosts, fetchDestinations } from "../lib/api";

export default function Home() {
  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [culturePosts, setCulturePosts] = useState([]);
  const [isHomeLoading, setIsHomeLoading] = useState(true);
  const [homeError, setHomeError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadHomeData() {
      try {
        setIsHomeLoading(true);
        setHomeError("");

        const [destinationsData, cultureData] = await Promise.all([
          fetchDestinations(),
          fetchCulturePosts(),
        ]);

        if (isMounted) {
          setFeaturedDestinations(destinationsData.slice(0, 5));
          setCulturePosts(cultureData);
        }
      } catch (error) {
        if (isMounted) {
          setHomeError(error.message || "Failed to load homepage data.");
        }
      } finally {
        if (isMounted) {
          setIsHomeLoading(false);
        }
      }
    }

    loadHomeData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <HeroSection />
      <FeatureSplit />
      <DestinationsSection
        destinations={featuredDestinations}
        isLoading={isHomeLoading}
        error={homeError}
      />
      <SanctuarySection />
      <CultureBanner culturePosts={culturePosts} />
      <FestivalSection culturePosts={culturePosts} />
      <PeopleSection />
      <TravelSection />
      <ContactBanner />
    </>
  );
}
