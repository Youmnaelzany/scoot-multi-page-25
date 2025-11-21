import YellowButton from "./YellowButton";

export default function ListedCity() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8 px-7 py-30 text-center md:gap-10 md:px-10 lg:flex-row lg:justify-between lg:gap-0 lg:px-16 lg:py-40 lg:text-left"
      aria-labelledby="listed-city-heading"
    >
      <h2
        id="listed-city-heading"
        className="font-space-mono max-w-[457px] text-[2rem] leading-8 font-bold tracking-[1.43px] text-[#495567] md:text-[3rem] md:leading-12 md:tracking-[-2.14px] lg:max-w-[300px]"
      >
        Your City Not Listed?
      </h2>

      <p className="font-lexend-deca max-w-[536px] shrink-0 text-[0.9375rem] leading-6.25 font-normal tracking-normal text-[#939CAA]">
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the button or contacting us on social.
      </p>

      <YellowButton
        aria-label="Send us a message"
        className="transition-all duration-300 ease-in-out hover:scale-105"
      >
        Message Us
      </YellowButton>
    </section>
  );
}
