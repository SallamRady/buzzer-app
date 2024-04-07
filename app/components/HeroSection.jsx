import imgSrc from "@/assets/home/HeroSectionBG.png";
import heroSec from "@/assets/home/heroSec.png";
import MainParagraph from "@/components/text/MainParagraph";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
  // Return our UI
  return (
    <div
      className="absolute  top-0 left-0  overflow-hidden  bg-cover bg-fixed bg-no-repeat p-12"
      style={{
        backgroundImage: `url(${imgSrc.src})`,
        height: "400px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        height: "100vh",
        width: "100vw",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex h-full items-start justify-center p-10 flex-col">
        <Image src={heroSec.src} width={500} height={300} alt="Buzzer App" />
        <MainParagraph
          statment={
            <>
              Welcome to our exquisite salon, where beauty meets expertise.
              <br />
              Step into a world of luxury and indulgence, where we are
              <br />
              dedicated to enhancing your natural beauty and leaving
              <br />
              you feeling radiant.
            </>
          }
          className={"text-white text-md"}
        />
        {/* Search form */}
        <form className="md:min-w-[480px] my-3 mt-14">
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class={`
              block w-full p-4 ps-10 text-lg
              text-white rounded-full border-0 outline-none`}
              placeholder="Search "
              style={{ background: "#373234" }}
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5  bottom-2.5 bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              <FaSearch fontSize={22}/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
