import LogoImage from "../LogoImg";
import IconBtn from "../btns/IconBtn";
import MainBtn from "../btns/MainBtn";
import MainParagraph from "../text/MainParagraph";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import footerBG from "@/assets/FooterBG.png";

export default function MainFooter() {
  // TODO::declare and define our component state and variables

  // * return ui
  return (
    <div
      className="h-full w-full m-0 mt-10 footer-container"
      style={{
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex w-full justify-around flex-wrap pt-5 pb-16 text-white border-b-2" >
        <div className="w-full md:w-3/12 p-5">
          <LogoImage width={70} height={60} />
          <MainParagraph
            className={"my-3"}
            statment={
              <>
                <br />
                These guys have been absolutely outstanding.
                <br />
                When I needed them they came through in a big way!
                <br />I know that if you buy this theme.
              </>
            }
          />
          <h5 className="font-bold mt-2 mb-6">Contact Info</h5>
          <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
            <li>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-5" />
                <p className="text-slate-500">+91 1234567891</p>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <IoMail className="mr-5" />
                <p className="text-slate-500">munasbas007@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="w-full md:w-3/12 p-5">
          <h5 className="font-bold mt-2 mb-8">Account</h5>
          <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
            <li>
              <p className="text-slate-500">Home</p>
            </li>
            <li>
              <p className="text-slate-500">About US</p>
            </li>
            <li>
              <p className="text-slate-500">Contact US</p>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="w-full md:w-3/12 p-5">
          <h5 className="font-bold mt-2 mb-8">Legals</h5>
          <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
            <li>
              <p className="text-slate-500">Privacy Policy</p>
            </li>
            <li>
              <p className="text-slate-500">Terms & Condition</p>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="w-full md:w-3/12 p-5">
          <h5 className="font-bold mt-2 mb-8">Subscribe</h5>
          <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
            <li className="my-2">
              <MainBtn 
                text={
                  <div className="flex justify-between items-center">
                    <IoMail className="mr-5" />
                    <span>Enter Your Email</span>
                  </div>
                }
                className={"border-none bg-gray-400 text-white outline-none"}
              />
            </li>
            <li className="my-2">
              <MainBtn  text={"Subscribe"} className={"border-3"} />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-2 text-center p-8 flex justify-center items-center">
        <IconBtn icon={<TiSocialTwitter fontSize={18} />} className={"mx-2"} />
        <IconBtn icon={<TiSocialFacebook fontSize={18} />} className={"mx-2"} />
        <IconBtn icon={<TiSocialYoutube fontSize={18} />} className={"mx-2"} />
        <IconBtn
          icon={<SlSocialInstagram fontSize={18} />}
          className={"mx-2"}
        />
        <IconBtn icon={<SlSocialLinkedin fontSize={18} />} className={"mx-2"} />
      </div>
    </div>
  );
}
