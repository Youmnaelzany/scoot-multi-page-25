import Image from "next/image";

import { cn } from "@/lib/utils";

const PageTitles = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      aria-label="Page Title"
      className={cn(
        "flex h-[160px] items-center justify-center md:h-[200px] md:justify-between md:pl-10 lg:pl-14",
        className
      )}
    >
      <h1 className="font-space-mono text-[2.5rem] leading-10 tracking-[-1.70px] text-white md:text-[3.5rem] md:leading-14 md:tracking-[-2.5px]">
        {children}
      </h1>
      <Image
        src="/patterns/white-circles.svg"
        alt="white circles pattern"
        width={234}
        height={63}
        className="relative -right-8 hidden md:flex"
      />
    </section>
  );
};
export default PageTitles;
