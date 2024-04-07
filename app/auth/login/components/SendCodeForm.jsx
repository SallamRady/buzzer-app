"use client";
import MainBtn from "@/components/btns/MainBtn";
import TextInputField from "@/components/form/TextInputField";
import MainParagraph from "@/components/text/MainParagraph";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setOtpSend } from "@/redux/slices/auth.slice";

export default function SendCodeForm() {
  // TODO::declare and define our component state and variables..
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setOtpSend(true));
  };
  return (
    <>
      <h6 className="text-lg font-bold dark:text-white my-2">Welcome!</h6>
      <MainParagraph
        statment={"Enter the authentication code we sent at*******896"}
      />
      <form className="max-w-sm mt-10" onSubmit={handleSubmit}>
        <TextInputField
          placeholder={"Phone Number"}
          handleOnChange={() => {}}
        />
        <MainParagraph statment={"or"} className={"text-center"} />
        <TextInputField placeholder={"Email"} handleOnChange={() => {}} />
        <MainBtn text={"Next"} type={"submit"} className={"w-full mt-20"} />
        <MainParagraph
          statment={
            <>
              Don't have an Account?{" "}
              <Link href="/" className="text-red-500">
                Register
              </Link>
            </>
          }
          className={"text-center"}
        />
      </form>
    </>
  );
}
