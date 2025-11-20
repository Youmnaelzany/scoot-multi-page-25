import Image from "next/image";

import { OUR_VALUE } from "@/lib/constants";

const JoinUs = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 px-7 pt-30 md:px-10 lg:px-16 lg:pt-40">
      <h2 className="font-space-mono text-center text-[2rem] leading-8 font-bold tracking-[-1.43px] text-[#495567] md:text-5xl md:leading-12 md:tracking-[-2.14px]">
        Why join us?
      </h2>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:justify-between">
        {OUR_VALUE.map((values) => (
          <div
            className="flex flex-col items-center justify-center gap-16"
            key={values.id}
          >
            <div className="relative">
              <Image
                src={values.icon}
                alt={values.title}
                width={240}
                height={288}
                className="rounded-full"
              />
              <h3 className="absolute inset-x-17 -bottom-10 flex size-24 items-center justify-center rounded-full bg-[#FCB72B] text-2xl leading-7 font-bold tracking-[-1.07px] text-[#495567]">
                {values.number}
              </h3>
            </div>
            <div className="flex max-w-[457px] flex-col items-center justify-center gap-8 text-center">
              <h4 className="font-space-mono text-[#495567]tracking-[1.07px] text-2xl leading-7 font-bold">
                {values.title}
              </h4>
              <h5 className="font-lexend-deca text-[0.9375rem] leading-6.25 font-normal tracking-normal text-[#939CAA]">
                {values.description}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default JoinUs;
