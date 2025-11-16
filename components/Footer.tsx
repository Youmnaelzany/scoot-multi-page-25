import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NAV_LINKS } from "@/lib/constants";

export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: (
      <FaSquareFacebook className="size-7 text-[#FCB72B] transition-colors duration-300 ease-in-out hover:text-white" />
    ),
    href: "https://www.facebook.com",
    tooTip: "Facebook",
  },
  {
    id: 2,
    icon: (
      <FaXTwitter className="size-7 text-[#FCB72B] transition-colors duration-300 ease-in-out hover:text-white" />
    ),
    href: "https://www.twitter.com",
    tooTip: "Twitter",
  },
  {
    id: 3,
    icon: (
      <FaInstagram className="size-7 text-[#FCB72B] transition-colors duration-300 ease-in-out hover:text-white" />
    ),
    href: "https://www.instagram.com",
    tooTip: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-20 bg-[#333A44] px-7 py-10 md:flex-row md:justify-between md:px-10 md:py-14 lg:px-14">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-14">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo-light.svg"
            alt="Scoot Logo"
            width={108}
            height={29}
          />
        </Link>
        <ul className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          {NAV_LINKS.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="font-space-mono ease-in-ou text-[0.9375rem] leading-6.25 font-bold tracking-normal text-[#939CAA] transition-colors duration-300 hover:text-[#FCB72B]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex items-center gap-8">
        {SOCIAL_LINKS.map(({ id, icon, href, tooTip }) => (
          <li key={id}>
            <Tooltip>
              <TooltipTrigger>
                <Link href={href} title={tooTip} className="cursor-pointer">
                  {icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent className="text-xs text-white">
                {tooTip}
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
