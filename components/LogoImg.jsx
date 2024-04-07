import logoImg from "@/assets/logo.png";
import Image from "next/image";

export default function LogoImage({ width, height, className }) {
  return (
    <Image
      src={logoImg.src}
      width={width}
      height={height}
      alt="Buzzer App Logo"
      className={className??''}
    />
  );
}
