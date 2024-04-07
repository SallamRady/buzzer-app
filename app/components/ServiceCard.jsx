import img from "@/assets/home/service.png";
import Image from "next/image";

export default function ServiceCard() {
  return (
    <div className="w-[220px] h-[200px] flex justify-center items-center flex-col border-2 border-gray-400 shadow-lg rounded-md">
      <Image src={img.src} width={100} height={100} alt="services" />
      <h5 className="text-2xl font-bold">Special Menu</h5>
    </div>
  );
}
