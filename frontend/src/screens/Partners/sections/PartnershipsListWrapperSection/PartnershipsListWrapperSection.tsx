import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PartnershipsListWrapperSection = (): JSX.Element => {
  // Define partnership program data for mapping
  const partnershipPrograms = [
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/check-verified-01.svg",
      iconAlt: "Check verified",
      title: "Affiliate partner program",
      description:
        "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/code-square-02.svg",
      iconAlt: "Code square",
      title: "Technology partner program",
      description:
        "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It's simple, safe and secure!",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/sun-setting-01.svg",
      iconAlt: "Sun setting",
      title: "Start up growth program",
      description:
        "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row w-full items-stretch gap-8 md:gap-16 pt-12 pb-20 px-4 md:px-16 bg-grayscale-01">
      {partnershipPrograms.map((program, index) => (
        <Card
          key={index}
          className="flex-1 border-none shadow-none bg-transparent flex flex-col items-center justify-start text-center"
        >
          <CardContent className="flex flex-col items-center gap-4 p-0 w-full">
            <div className="bg-[#6852d61f] inline-flex items-center justify-center p-4 rounded-full mb-2">
              <img
                className="w-8 h-8"
                alt={program.iconAlt}
                src={program.icon}
              />
            </div>
            <h3 className="w-full font-lg-heding-light-max font-[number:var(--lg-heding-light-max-font-weight)] text-grayscale-12 text-[length:var(--lg-heding-light-max-font-size)] tracking-[var(--lg-heding-light-max-letter-spacing)] leading-[var(--lg-heding-light-max-line-height)] [font-style:var(--lg-heding-light-max-font-style)] mb-2">
              {program.title}
            </h3>
            <p className="w-full opacity-[0.84] font-lg-body-max font-[number:var(--lg-body-max-font-weight)] text-grayscale-12 text-[length:var(--lg-body-max-font-size)] tracking-[var(--lg-body-max-letter-spacing)] leading-[var(--lg-body-max-line-height)] [font-style:var(--lg-body-max-font-style)]">
              {program.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
