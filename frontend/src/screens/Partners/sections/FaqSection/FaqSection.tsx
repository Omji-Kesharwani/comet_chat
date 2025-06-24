import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "This is a frequently asked question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
    {
      question: "This is a frequently asked question?",
    },
    {
      question:
        "This is a very long frequently asked question about our services with more than one line?",
    },
    {
      question: "This is a frequently asked question?",
    },
    {
      question: "This is a question?",
    },
    {
      question: "This is a question?",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-grayscale-01 overflow-hidden">
      {/* Background gradient elements */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="w-[534px] h-[457px] top-0 left-0 rounded-[267px/228.5px] blur-[180px] opacity-30 absolute bg-[linear-gradient(290deg,rgba(252,184,168,1)_0%,rgba(185,104,164,1)_48%,rgba(117,108,246,1)_100%)]" />
        <div className="w-[544px] h-[469px] top-[179px] right-0 rounded-[272px/234.5px] blur-[200px] opacity-20 absolute bg-[linear-gradient(290deg,rgba(252,184,168,1)_0%,rgba(185,104,164,1)_48%,rgba(117,108,246,1)_100%)]" />

        {/* Section header */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <h3 className="font-xl-heding-light-max font-[number:var(--xl-heding-light-max-font-weight)] text-orange-09 text-[length:var(--xl-heding-light-max-font-size)] text-center tracking-[var(--xl-heding-light-max-letter-spacing)] leading-[var(--xl-heding-light-max-line-height)] [font-style:var(--xl-heding-light-max-font-style)]">
            FAQ&apos;s
          </h3>
          <h2 className="max-w-[528px] font-3xl-light-max font-[number:var(--3xl-light-max-font-weight)] text-grayscale-12 text-[length:var(--3xl-light-max-font-size)] text-center tracking-[var(--3xl-light-max-letter-spacing)] leading-[var(--3xl-light-max-line-height)] [font-style:var(--3xl-light-max-font-style)]">
            We want to help you with all your doubts
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex justify-end w-full">
          <Accordion type="single" collapsible className="w-full max-w-[751px]">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="mb-4 rounded-[20px] border border-solid border-[#14131d0a] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(20,19,29,0.02)_0%,rgba(20,19,29,0.02)_100%)] overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline">
                  <div
                    className={`text-left font-xl-heding-light-max font-[number:var(--xl-heding-light-max-font-weight)] text-grayscale-12 text-[length:var(--xl-heding-light-max-font-size)] tracking-[var(--xl-heding-light-max-letter-spacing)] leading-[var(--xl-heding-light-max-line-height)] [font-style:var(--xl-heding-light-max-font-style)] ${index !== 0 ? "opacity-[0.74]" : ""}`}
                  >
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  {item.answer && (
                    <div className="opacity-[0.74] font-xl-body-max font-[number:var(--xl-body-max-font-weight)] text-grayscale-12 text-[length:var(--xl-body-max-font-size)] tracking-[var(--xl-body-max-letter-spacing)] leading-[var(--xl-body-max-line-height)] [font-style:var(--xl-body-max-font-style)]">
                      {item.answer}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
