import LogoImage from "@/components/LogoImg";
import AuthLayoutImageSection from "./components/layout/ImageSection";

//* Main Layout For Auth Pages
export default function AuthLayout({ children }) {
  const GridItem = ({ className, children }) => {
    return (
      <div className={`w-full md:w-1/2 p-4 ${className ?? ""}`}>{children}</div>
    );
  };
  return (
    <html lang="en">
      <body>
        <div className="flex px-4">
          {/* Form Section */}
          <GridItem className="">
            <LogoImage width={150} height={200} className="my-10" />
            {children}
          </GridItem>
          {/* Image Section */}
          <GridItem className={' hidden md:block'}>
            <AuthLayoutImageSection />
          </GridItem>
        </div>
      </body>
    </html>
  );
}
