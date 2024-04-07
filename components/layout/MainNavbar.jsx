import {
  ABOUT_PATH,
  CONTACT_PATH,
  HOME_PATH,
  PRODUCTS_PATH,
} from "@/constants/pathes.constant";
import LogoImage from "../LogoImg";
import Link from "next/link";
import NavbarList from "./NavbarComponents/NavbarList";
import NavbarLink from "./NavbarComponents/NavbarLink";
import NavbarIconBtn from "./NavbarComponents/NavbarIconBtn";
import { IoPerson } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";

export default function MainNavbar() {
  //*  return ui
  return (
    <nav class="bg-none w-full z-20 top-0 start-0 sticky mb-4">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href={HOME_PATH}
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <LogoImage width={70} height={60} />
        </Link>
        {/* right list and mumporger Btn */}
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavbarList>
            <NavbarIconBtn
              icon={<IoPerson size={20} />}
              handleOnClick={() => {}}
            />
            <NavbarIconBtn
              icon={<IoIosNotifications size={20} />}
              handleOnClick={() => {}}
            />
            <NavbarIconBtn
              icon={<RiMenu2Line size={20} />}
              handleOnClick={() => {}}
            />
          </NavbarList>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* middle part */}
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <NavbarList>
            <NavbarLink path={HOME_PATH} text={"Home"} />
            <NavbarLink path={PRODUCTS_PATH} text={"Products"} />
            <NavbarLink path={ABOUT_PATH} text={"About Us"} />
            <NavbarLink path={CONTACT_PATH} text={"Contact US"} />
          </NavbarList>
        </div>
      </div>
    </nav>
  );
}
