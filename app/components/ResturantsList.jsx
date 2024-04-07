import ContainerDiv from "@/components/layout/ContainerDiv";
import MainBtn from "@/components/btns/MainBtn";
import SectionHeader from "./SectionHeader";
import ResturanCard from "./ResturanCard";

export default function ResturantsList() {
  let arr = Array(4).fill(0);
  return (
    <ContainerDiv className={"mt-4 text-center"}>
      <SectionHeader text={"Our Restaurants"} />
      <div className="flex flex-wrap justify-around items-center">
        {arr.map((val, idx) => {
          return <ResturanCard key={`p-${idx}`} />;
        })}
      </div>
      <MainBtn text={"View All"} className={' my-5'} />
    </ContainerDiv>
  );
}
