import PageTitles from "@/components/PageTitles";

export default function AboutPage() {
  return (
    <main className="">
      <PageTitles className="bg-[url('/images/about-hero-mobile.jpg')] md:bg-[url('/images/about-hero-tablet.jpg')] lg:bg-[url('/images/about-hero-desktop.jpg')] bg-cover bg-no-repeat">
        About
      </PageTitles>
    </main>
  );
}
