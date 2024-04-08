import Image from "next/image";
import Link from "next/link";
import imgSrc from "@/assets/home/HeroSectionBG.png";
import Ratting from "./Rating";
import MainParagraph from "@/components/text/MainParagraph";
import { FaLocationDot } from "react-icons/fa6";

export default function ResturanCard() {
  return (
    <div className="block rounded-lg bg-white shadow-lg shadow-secondary-1 dark:bg-surface-dark w-[280px] m-1 border-2 border-gray-200">
      {/* card image */}
      <Link href="#">
        <Image
          className=""
          src={imgSrc.src}
          alt="resturant card"
          width={330}
          height={320}
          style={{ borderRadius: "15px 15px 50% 50%", height: "320px" }}
        />
      </Link>
      <div className="p-6 text-surface dark:text-white text-center">
        <Ratting />
        <h2 className="my-2 text-xl font-bold">Card title</h2>
        <p className="my-2 text-xl h-3 text-red-500">Cafe</p>
        <MainParagraph
          className="flex justify-center items-center"
          statment={
            <>
              <FaLocationDot color="#350202" style={{ margin: "0 5px" }} />
              Main Market Riyadh, KSA
            </>
          }
        />
      </div>
    </div>
  );
}
