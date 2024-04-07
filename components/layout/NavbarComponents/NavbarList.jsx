export default function NavbarList({ className, children }) {
  return (
    <ul
      className={`flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row ${
        className ?? ""
      }`}
    >
      {children}
    </ul>
  );
}
