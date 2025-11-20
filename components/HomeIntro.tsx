import Image from "next/image";

import YellowButton from "./YellowButton";

const HomeIntro = () => {
  return (
    <section className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden bg-[url('/images/home-hero-mobile.jpg')] bg-cover bg-center bg-no-repeat px-7 text-center text-white md:bg-[url('/images/home-hero-tablet.jpg')] md:px-10 lg:items-start lg:bg-[url('/images/home-hero-desktop.jpg')] lg:px-16">
      <div className="flex w-[311px] flex-col items-center gap-6 text-center md:w-[573px] lg:w-[500px] lg:items-start lg:text-left">
        <h1 className="font-space-mono text-[2.5rem] leading-10 font-bold tracking-[-1.79px] md:text-[3.5rem] md:leading-14 md:tracking-[-2.5px]">
          Scooter sharing made simple
        </h1>
        <div className="space-y-6 lg:self-end">
          <p className="font-lexend-deca text-[0.9375rem] leading-6.25 font-normal tracking-normal lg:w-[405px]">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you&apos;re away!
          </p>
          <YellowButton className="">Get Scootin</YellowButton>
        </div>
      </div>
      {/* Patterns */}
      <Image
        src="/patterns/white-circles.svg"
        alt="white circles pattern"
        width={234}
        height={63}
        className="absolute -right-8 bottom-12 hidden md:flex lg:bottom-44"
      />{" "}
      <Image
        src="/patterns/right-arrow.svg"
        alt="right arrow"
        width={380}
        height={151}
        className="absolute bottom-10 left-0 hidden md:flex lg:bottom-42 lg:left-150"
      />{" "}
      <Image
        src="/patterns/line.svg"
        alt="line"
        width={203}
        height={15}
        className="absolute hidden lg:bottom-70 lg:-left-20 lg:flex"
      />{" "}
    </section>
  );
};
export default HomeIntro;
