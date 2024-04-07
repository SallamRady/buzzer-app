"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function MainDataProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      {/*Redux Provider*/}
      {children}
    </Provider>
  );
}
