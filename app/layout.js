import { Inter } from "next/font/google";
import "./globals.css";
import MainDataProviderWrapper from "@/components/layout/MainDProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainDataProviderWrapper>{children}</MainDataProviderWrapper>
      </body>
    </html>
  );
}
