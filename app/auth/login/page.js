"use client";
import MainParagraph from "@/components/text/MainParagraph";
import { setCurrentAuthPage } from "@/redux/slices/auth.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SendCodeForm from "./components/SendCodeForm";
import ConfirmOTPCode from "./components/ConfirmOTPCode";

export default function LoginPage() {
  // TODO::declare and define our component state and variables..
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentAuthPage("login"));
  }, []);

  // TODO::Helper Methods
  const ViewForm = () => {
    if (!reduxStore.auth.otpSend) return <SendCodeForm />;
    return <ConfirmOTPCode />;
  };

  // *return our ui
  return (
    <>
      {/* login form */}
      <ViewForm />
    </>
  );
}
