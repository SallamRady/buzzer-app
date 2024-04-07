import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import ResturantsList from "./components/ResturantsList";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ResturantsList />
      <OurServices />
    </>
  );
}
