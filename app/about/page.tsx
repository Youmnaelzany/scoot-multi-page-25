import FaqsAnswers from "@/components/FaqsAnswers";
import JoinUs from "@/components/JoinUs";
import PageTitles from "@/components/PageTitles";

export default function AboutPage() {
  return (
    <main className="">
      <PageTitles className="bg-[url('/images/about-hero-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/images/about-hero-tablet.jpg')] lg:bg-[url('/images/about-hero-desktop.jpg')]">
        About
      </PageTitles>
      <JoinUs />
      <FaqsAnswers />
    </main>
  );
}
