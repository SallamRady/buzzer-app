import Image from "next/image";
import horzintalLine from "@/assets/home/horzintalLine.png";

export default function HorizentalLine() {
  return (
    <div className="w-full flex justify-center items-center my-1">
      <Image src={horzintalLine.src} alt="Buzzer App" width={300} height={15} />
    </div>
  );
}
