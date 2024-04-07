import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import Image from "next/image";
import imgL from "@/assets/home/borgarl.png";
import imgR from "@/assets/home/borgarr.png";

export default function OurServices() {
  return (
    <div className="my-10 w-full mx-0">
      <SectionHeader text={"Our Services"} />
      <div className="relative w-full flex justify-center items-end">
        <Image
          src={imgL.src}
          className="absolute top-0 left-0  max-w-xs max-h-80 hidden md:inline-block mb-2"
          width={350}
          height={300}
          alt="img"
        />
        <div className="w-9/12 mt-3 flex justify-around items-end flex-wrap">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <Image
          src={imgR.src}
          className="absolute top-0 right-0 max-w-xs max-h-80 hidden md:inline-block"
          width={350}
          height={300}
          alt="img"
        />
      </div>
    </div>
  );
}
