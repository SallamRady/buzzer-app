"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { usePathname } from "next/navigation";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

export default function MainDataProviderWrapper({ children }) {
  // TODO::declare our component state
  const pathname = usePathname();

  // * return ui
  return (
    <Provider store={store}>
      {/*Redux Provider*/}
      {/* Not show Navbar in auth pages */}
      {!pathname.includes("auth") && <MainNavbar />}
      {children}
      {/* Not show Navbar in auth pages */}
      {!pathname.includes("auth") && <MainFooter />}
    </Provider>
  );
}
