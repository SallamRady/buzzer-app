"use client";
import { useEffect, useState } from "react";
import { setCurrentAuthPage, setOtpSend } from "@/redux/slices/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import MainParagraph from "@/components/text/MainParagraph";
import TextInputField from "@/components/form/TextInputField";
import MainBtn from "@/components/btns/MainBtn";
import { useRouter } from "next/navigation";
import { app } from "@/firebase.config";
import Link from "next/link";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";



export default function LoginPage() {
  // TODO::declare and define our component state and variables..
  const reduxStore = useSelector((state) => state);
  const [conformation, setConformation] = useState(null);
  const [phone, setPhone] = useState("");
  const [OTP, setOTP] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const navigator = useRouter();

  //TODO::step 1 in phone login :setup recaptcha
  useEffect(() => {
    dispatch(setCurrentAuthPage("login"));
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {},
        "expired-callback": () => {},
      }
    );
  }, []);

  // TODO::declare and define helper methods
  const handleSubmitPhone = (e) => {
    e.preventDefault();
    handleSendOTP();
  };

  //TODO::step 2 in phone login :handleSendOTP
  const handleSendOTP = async () => {
    try {
      //const formattedPhoneNumber = `+${phone.replace(/\D/g, "")}`;
      const conformation = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );

      setConformation(conformation);
      alert("OTP Sended Successfully Check your phone :)");
      dispatch(setOtpSend(true));
    } catch (err) {
      console.log("Failed to send OTP Error:", err);
      alert("Failed to send OTP");
    }
  };

  //TODO::3.handleOTPSubmit
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      await conformation.confirm(OTP);
      setOTP("");
      alert("Valid OTP Login done Successfully.");
      navigator.push("/");
    } catch (err) {
      console.log("Error in confirm OTP:", err);
      alert("Error in handleOTPSubmit");
    }
  };

  // *return our ui
  return (
    <>
      {/* login form */}
      <div id="recaptcha-container"></div>
      {!reduxStore.auth.otpSend ? (
        <>
          <h6 className="text-lg font-bold dark:text-white my-2">Welcome!</h6>
          <MainParagraph
            statment={"Enter the authentication code we sent at*******896"}
          />

          <form className="max-w-sm mt-10" onSubmit={handleSubmitPhone}>
            <TextInputField
              placeholder={"Phone Number"}
              handleOnChange={(e) => setPhone(e.target.value)}
            />
            <MainParagraph statment={"or"} className={"text-center"} />
            <TextInputField placeholder={"Email"} handleOnChange={() => {}} />
            <MainBtn  text={"Next"} type={"submit"} className={"w-full mt-20"} />
            <MainParagraph
              statment={
                <>
                  Dont have an Account?{" "}
                  <Link href="/" className="text-red-500">
                    Register
                  </Link>
                </>
              }
              className={"text-center"}
            />
          </form>
        </>
      ) : (
        <>
          <h6 className="text-lg font-bold dark:text-white my-2">Login Code</h6>
          <MainParagraph
            statment={"Enter the authentication code we sent at*******896"}
          />
          <form className="max-w-sm mt-10" onSubmit={handleOTPSubmit}>
            <TextInputField
              placeholder={phone ?? "+971 2356 5896"}
              disabled={true}
              handleOnChange={(e) => {}}
            />
            <TextInputField
              placeholder={"Login Code"}
              handleOnChange={(e) => setOTP(e.target.value)}
            />
            <MainBtn 
              text={"Submit"}
              type={"submit"}
              className={"w-full mt-20"}
            />
          </form>
        </>
      )}
    </>
  );
}
