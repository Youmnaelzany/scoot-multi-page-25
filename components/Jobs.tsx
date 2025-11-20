import { CAREERS_POSITIONS } from "@/lib/constants";

import YellowButton from "./YellowButton";

const Jobs = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-7 py-30 md:px-10 lg:gap-6 lg:px-16 lg:py-40">
      {CAREERS_POSITIONS.map((positions) => (
        <div
          className="flex w-full flex-col items-center justify-center gap-4 bg-[#F2F5F9] px-4 py-10 md:flex-row md:justify-between md:px-10 lg:px-16"
          key={positions.id}
        >
          <div className="flex flex-col items-center justify-center gap-1 text-center md:items-start md:gap-2 md:text-left">
            <h2 className="font-space-mono text-lg leading-6 font-bold tracking-[-0.8px] text-[#495567] md:text-2xl md:leading-7 md:tracking-[-1.07px]">
              {positions.title}
            </h2>
            <h3 className="font-lexend-deca text-[0.9375rem] leading-6.25 font-normal tracking-normal text-[#495567]">
              {positions.country}
            </h3>
          </div>
          <YellowButton className="w-[247px] md:w-[180]">Apply</YellowButton>
        </div>
      ))}
    </section>
  );
};
export default Jobs;
