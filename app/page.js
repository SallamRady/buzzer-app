import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import ResturantsList from "./components/ResturantsList";
import OurServices from "./components/OurServices";
import MapSection from "./components/MapSection";
import ContainerDiv from "@/components/layout/ContainerDiv";
import ResturanCard from "./components/ResturanCard";
import MainBtn from "@/components/btns/MainBtn";
import Gallery from "./components/Gallery";

export default function Home() {
  let arr = Array(4).fill(0);
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ResturantsList />
      <OurServices />
      <MapSection />
      <ContainerDiv className={"mt-4 text-center"}>
        <div className="flex flex-wrap justify-around items-center">
          {arr.map((val, idx) => {
            return <ResturanCard key={`p-${idx}`} />;
          })}
        </div>
      </ContainerDiv>
      <Gallery />
    </>
  );
}
