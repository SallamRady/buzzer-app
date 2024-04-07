import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({ path, text }) {
  // TODO::declare and define
  const pathname = usePathname();

  // return our ui
  return (
    <li>
      <Link
        href={path}
        class={`block py-2 px-3 ${
          pathname == path ? "text-amber-400" : "text-slate-300"
        } md:bg-transparent`}
      >
        {text}
      </Link>
    </li>
  );
}
