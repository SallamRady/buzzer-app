import ContainerDiv from "@/components/layout/ContainerDiv";
import imgSrc from "@/assets/home/HeroSectionBG.png";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

export default function Gallery() {
  let arr = Array(4).fill(0);
  return (
    <ContainerDiv className={"my-24"}>
      <SectionHeader text={"Gallery"} />
      <div className="flex flex-wrap justify-around items-center">
        {arr.map((val, idx) => {
          return (
            <Image
              style={{
                height: "340px",
                padding: "9px",
                borderRadius: "19px",
                margin: "0 7px",
              }}
              key={idx}
              src={imgSrc.src}
              width={280}
              height={390}
              className="rounded-lg"
            />
          );
        })}
      </div>
    </ContainerDiv>
  );
}
