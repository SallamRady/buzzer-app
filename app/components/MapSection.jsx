import ContainerDiv from "@/components/layout/ContainerDiv";
import SearchBar from "./SearchBar";
import SectionHeader from "./SectionHeader";
import GoogleMap from "./GoogleMap";

export default function MapSection() {
  return (
    <ContainerDiv>
      <div className={"flex justify-center items-center flex-col my-10"}>
        <SectionHeader text={"Nearest Restaurants"} />
        <SearchBar />
        <div className="w- w-full h-80">
          <GoogleMap />
        </div>
      </div>
    </ContainerDiv>
  );
}
