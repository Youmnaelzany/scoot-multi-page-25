import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";

import MobileMenu from "./MobileMenu";
import YellowButton from "./YellowButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-7 py-8 md:px-10 lg:px-14">
      <div className="flex items-center gap-12 lg:gap-16">
        <Image src="/logo.svg" alt="Scoot Logo" width={108} height={29} />
        <ul className="hidden gap-8 md:flex md:items-center md:justify-between">
          {NAV_LINKS.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="font-space-mono text-[0.9375rem] leading-6.25 font-bold tracking-normal text-[#939CAA] transition-colors hover:text-[#FCB72B]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <YellowButton className="hidden md:flex">Get Scootin</YellowButton>
      <MobileMenu />
    </header>
  );
};
export default Header;
