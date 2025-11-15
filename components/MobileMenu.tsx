import Link from "next/link";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";

import YellowButton from "./YellowButton";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-7 text-[#FCB72B]" />
        </SheetTrigger>
        <SheetContent side="right" className="h-full bg-[#333A44] px-7">
          <div className="flex h-full flex-col justify-between py-8">
            <ul className="flex flex-col gap-8">
              {NAV_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="font-space-mono text-lg leading-6.25 font-bold tracking-normal text-[#E5ECF4] transition-colors hover:text-[#FCB72B]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <YellowButton>Get Scootin</YellowButton>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
