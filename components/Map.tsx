import Image from "next/image";

const cities = ["New York", "London", "Yokohama", "Jakarta"];

export default function Map() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-10 px-7 pt-18 md:px-10 md:pt-36 lg:flex-row lg:justify-between lg:px-16 lg:pt-30.5"
      aria-labelledby="map-locations-heading"
    >
      <h2 id="map-locations-heading" className="sr-only">
        Our Global City Locations
      </h2>

      <div className="w-full lg:w-1/2">
        <Image
          src="/images/world-map-desktop.png"
          alt="A world map showing our main city locations including New York, London, Yokohama, and Jakarta"
          width={800}
          height={600}
          priority
          className="hidden h-auto w-full object-contain lg:block"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />

        <Image
          src="/images/world-map-tablet.png"
          alt="A world map showing our main city locations including New York, London, Yokohama, and Jakarta"
          width={600}
          height={500}
          loading="lazy"
          className="hidden h-auto w-full object-contain md:block lg:hidden"
          sizes="(min-width: 768px) 70vw, 100vw"
        />

        <Image
          src="/images/world-map-mobile.png"
          alt="A world map showing our main city locations including New York, London, Yokohama, and Jakarta"
          width={304}
          height={622}
          loading="lazy"
          className="block h-auto w-full object-contain md:hidden"
          sizes="100vw"
        />
      </div>

      <ul className="flex w-full flex-col items-center justify-center gap-4 md:max-w-md">
        {cities.map((city) => (
          <li
            key={city}
            className="font-space-mono w-full bg-[#FCB72B]/15 px-6 py-8 text-center text-2xl leading-7 font-bold tracking-[-1.07px] text-[#495567]"
          >
            {city}
          </li>
        ))}
      </ul>
    </section>
  );
}
