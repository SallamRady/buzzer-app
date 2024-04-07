"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import img1 from "@/assets/auth/loginSendCode.png";
import img2 from "@/assets/auth/confirmCode.png";

export default function AuthLayoutImageSection() {
  // TODO::declare and define our component state and variables..
  const authState = useSelector((state) => state.auth);

  //* return suitable image according auth state
  const ViewImage = () => {
    switch (authState.page) {
      case "login":
        if (!authState.otpSend)
          return (
            <Image
              src={img1.src}
              width={800}
              height={775}
              alt="Auth Sample Image"
            />
          );
        return (
          <Image
            src={img2.src}
            width={800}
            height={775}
            alt="Auth Sample Image"
          />
        );
        break;
    }
  };

  //* return component ui.
  return (
    <div className="flex justify-center items-end">
      <ViewImage />
    </div>
  );
}
