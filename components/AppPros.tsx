import Image from "next/image";

import { APP_PROS } from "@/lib/constants";

const AppPros = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-12 overflow-hidden px-7 py-30 md:items-start md:gap-10 md:px-10 lg:flex-row lg:justify-between lg:px-16 lg:py-40">
      {APP_PROS.map((pros) => (
        <div
          key={pros.id}
          className="z-50 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:gap-19.75 lg:flex-col lg:items-start lg:justify-start lg:gap-10"
        >
          <Image
            src={pros.icon}
            alt={pros.title}
            height={56}
            width={56}
            className="md:h-[96px] md:w-[96px]"
          />
          <div className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:justify-start md:gap-6.75 md:text-left">
            <h2 className="font-space-mono text-xl leading-7 font-bold tracking-[-0.89px] text-[#495567] md:text-2xl md:tracking-[-1.07px]">
              {pros.title}
            </h2>
            <p className="font-lexend-deca text-[0.9375rem] leading-6.25 font-normal tracking-normal text-[#939CAA]">
              {pros.description}
            </p>
          </div>
        </div>
      ))}
      <Image
        src="/patterns/long-line-horizontal.svg"
        alt="Long line horizontal"
        height={15}
        width={974}
        className="absolute top-51 -left-12 z-10 hidden lg:flex"
      />
      <Image
        src="/patterns/long-line-vertical.png"
        alt="Long line vertical"
        height={513}
        width={15}
        className="absolute top-0 left-20 z-10 hidden md:flex lg:hidden"
      />
    </section>
  );
};
export default AppPros;
