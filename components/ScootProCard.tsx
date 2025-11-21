import Image from "next/image";

import YellowButton from "./YellowButton";

// Update the interface to make arrowPattern required since it's being used
interface ScootProCardProps {
  icon: string;
  title: string;
  description: string;
  pattern: string;
  patternPosition: string;
  specialClass?: string[];
  arrowPattern: string; // Made required since it's being used
  arrowPatternPosition: string;
}

export default function ScootProCard({
  icon,
  title,
  description,
  pattern,
  patternPosition,
  specialClass,
  arrowPattern,
  arrowPatternPosition,
}: ScootProCardProps) {
  return (
    <article className={specialClass?.join(" ")}>
      {/* Pattern (decorative) */}
      <Image
        src={pattern}
        alt=""
        role="presentation"
        width={311}
        height={311}
        className={`pointer-events-none z-10 hidden h-[311px] w-[311px] md:block md:h-[445px] md:w-[445px] ${patternPosition}`}
        loading="lazy"
      />

      {/* Arrow Pattern (decorative) */}
      <Image
        src={arrowPattern}
        alt=""
        role="presentation"
        width={741}
        height={151}
        className={`pointer-events-none ${arrowPatternPosition}`}
        loading="lazy"
      />

      <Image
        src={icon}
        alt={title}
        width={311}
        height={311}
        loading="lazy"
        className={`h-[311px] w-[311px] rounded-full object-contain md:h-[445px] md:w-[445px] ${
          specialClass?.some((cls) => cls.includes("flex-row-reverse"))
            ? "lg:mr-20"
            : "lg:ml-20"
        }`}
      />

      <div className="flex flex-col items-center justify-center gap-8 text-center md:max-w-[573px] md:gap-10 lg:max-w-[445px] lg:items-start lg:text-left">
        <h2 className="font-space-mono max-w-[457px] text-[2rem] leading-8 font-bold tracking-[-1.43px] text-[#495567] md:text-[3rem] md:leading-12 md:tracking-[-2.14px]">
          {title}
        </h2>
        <p className="font-lexend-deca text-[0.9375rem] leading-6.25 tracking-normal text-[#939CAA]">
          {description}
        </p>
        <YellowButton className="">Learn More</YellowButton>
      </div>
    </article>
  );
}
