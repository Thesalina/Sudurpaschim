import HeroSection from "../components/home/HeroSection";
import FeatureSplit from "../components/home/FeatureSplit";
import DestinationsSection from "../components/home/DestinationsSection";
import SanctuarySection from "../components/home/SanctuarySection";
import CultureBanner from "../components/home/CultureBanner";
import FestivalSection from "../components/home/FestivalSection";
import PeopleSection from "../components/home/PeopleSection";
import TravelSection from "../components/home/TravelSection";
import ContactBanner from "../components/home/ContactBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSplit />
      <DestinationsSection />
      <SanctuarySection />
      <CultureBanner />
      <FestivalSection />
      <PeopleSection />
      <TravelSection />
      <ContactBanner />
    </>
  );
}
