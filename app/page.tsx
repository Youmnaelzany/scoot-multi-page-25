import AppPros from "@/components/AppPros";
import HomeIntro from "@/components/HomeIntro";
import ScootProCard from "@/components/ScootProCard";
import { SCOOT_PROS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="">
      <HomeIntro />
      <AppPros />
      <section className="mb-30 space-y-30 md:mb-26 md:space-y-32 lg:mb-50 lg:space-y-40">
        {SCOOT_PROS.filter((item) => [1, 2, 3].includes(item.id)).map(
          (item) => (
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
          )
        )}
      </section>
    </main>
  );
}
