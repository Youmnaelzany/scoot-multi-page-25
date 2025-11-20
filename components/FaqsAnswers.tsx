import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

const FaqsAnswers = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-7 py-30 md:gap-16 md:px-10 lg:px-16 lg:py-40">
      {/* Title */}
      <h2 className="text-center text-[2rem] leading-8 font-bold tracking-[-1.43px] text-[#495567] md:text-[3rem] md:leading-12 md:tracking-[-2.14px]">
        FAQS
      </h2>
      {/* 1st FAQS */}
      <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <h3 className="font-space-mono text-2xl leading-7 font-bold tracking-[-1.07px] text-[#495567] md:text-[2.5rem] md:leading-12 md:tracking-[-1.79px]">
          How it works
        </h3>
        <div className="w-full max-w-[650px]">
          {FAQS.filter((item) => [1, 2, 3].includes(item.id)).map((item) => (
            <Accordion type="single" collapsible key={item.id} className="">
              <AccordionItem
                value={item.id.toString()}
                className="mb-4 bg-[#F2F5F9] px-6"
              >
                <AccordionTrigger>
                  <h4 className="font-space-mono text-lg leading-6 font-bold tracking-[-0.8px] text-[#495567] md:text-2xl md:leading-7 md:tracking-[-1.07px]">
                    {item.title}
                  </h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-lexend-deca max-w-[650px] text-[0.9375rem] leading-6.25 font-normal tracking-normal text-[#495567]">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      {/* 2nd FAQS */}
      <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <h3 className="font-space-mono text-2xl leading-7 font-bold tracking-[-1.07px] text-[#495567] md:text-[2.5rem] md:leading-12 md:tracking-[-1.79px]">
          Safe driving
        </h3>
        <div className="w-full max-w-[650px]">
          {FAQS.filter((item) => [4, 5, 6].includes(item.id)).map((item) => (
            <Accordion type="single" collapsible key={item.id} className="">
              <AccordionItem
                value={item.id.toString()}
                className="mb-4 bg-[#F2F5F9] px-6"
              >
                <AccordionTrigger>
                  <h4 className="font-space-mono text-lg leading-6 font-bold tracking-[-0.8px] text-[#495567] md:text-2xl md:leading-7 md:tracking-[-1.07px]">
                    {item.title}
                  </h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-lexend-deca max-w-[650px] text-[0.9375rem] leading-6.25 font-normal tracking-normal text-[#495567]">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FaqsAnswers;
