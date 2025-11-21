import FaqsAnswers from "@/components/FaqsAnswers";
import JoinUs from "@/components/JoinUs";
import PageTitles from "@/components/PageTitles";
import ScootProCard from "@/components/ScootProCard";
import { SCOOT_PROS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="">
      <PageTitles className="bg-[url('/images/about-hero-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/images/about-hero-tablet.jpg')] lg:bg-[url('/images/about-hero-desktop.jpg')]">
        About
      </PageTitles>
      <section className="mt-18 space-y-30 px-7 md:mt-36 md:space-y-32 md:px-10 lg:mt-30 lg:space-y-40 lg:px-16">
        {SCOOT_PROS.filter((item) => [4, 5].includes(item.id)).map((item) => (
          <ScootProCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            pattern={item.pattern}
            patternPosition={item.patternPosition}
            specialClass={item.specialClass}
          />
        ))}
      </section>
      <JoinUs page="about" />
      <FaqsAnswers />
    </main>
  );
}
