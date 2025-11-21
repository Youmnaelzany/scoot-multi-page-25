import Jobs from "@/components/Jobs";
import JoinUs from "@/components/JoinUs";
import PageTitles from "@/components/PageTitles";
import ScootProCard from "@/components/ScootProCard";
import { SCOOT_PROS } from "@/lib/constants";

export default function CareersPage() {
  return (
    <main className="">
      <PageTitles className="bg-[url('/images/careers-location-hero-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/images/careers-locations-hero-tablet.jpg')] lg:bg-[url('/images/careers-locations-hero-desktop.jpg')]">
        Careers
      </PageTitles>
      <section className="mt-18 md:mt-36 lg:mt-30">
        {SCOOT_PROS.filter((item) => [6].includes(item.id)).map((item) => (
          <ScootProCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            pattern={item.pattern}
            patternPosition={item.patternPosition}
            specialClass={item.specialClass}
            arrowPattern={item.arrowPattern}
            arrowPatternPosition={item.arrowPatternPosition}
          />
        ))}
      </section>
      <JoinUs page="careers" />
      <Jobs />
    </main>
  );
}
