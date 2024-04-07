import ContainerDiv from "@/components/layout/ContainerDiv";
import AboutBG from "@/assets/home/aboutBG.png";
import AboutImg from "@/assets/home/about.png";
import Image from "next/image";
import MainParagraph from "@/components/text/MainParagraph";
import MainBtn from "@/components/btns/MainBtn";

export default function AboutUs() {
  return (
    <>
      <div className="shadow-md w-full AboutPhrase" style={{ marginTop: "38rem" }}></div>
      <ContainerDiv>
        <div className="w-full flex justify-around items-center mb-3">
          <div className="hidden md:block w-5/12"
            style={{
              backgroundImage: `url(${AboutBG.src})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}>
            <Image
              src={AboutImg.src}
              width={700}
              height={650}
              alt="Buzzer App"
            />
          </div>
          <div className="w-11/12 md:w-5/12 text-center">
            <h2 class="text-4xl font-medium leading-tight">
              Welcome TO Our <br />
              Luxury Restaurant
            </h2>
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
            />
            <MainBtn text={"View All"} />
          </div>
        </div>
      </ContainerDiv>
    </>
  );
}
