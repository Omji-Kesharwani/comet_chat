import React from "react";
import { Button } from "../../../../components/ui/button";

export const PreFooterSection = (): JSX.Element => {
  // Images data for better organization
  const images = {
    stars1: "https://c.animaapp.com/mc99rq32MYYUAu/img/stars-1.png",
    stars2: "https://c.animaapp.com/mc99rq32MYYUAu/img/stars-2.png",
    illustration: "https://c.animaapp.com/mc99rq32MYYUAu/img/illustration.png",
    group: "https://c.animaapp.com/mc99rq32MYYUAu/img/group-1.png",
    blurLayer:
      "https://c.animaapp.com/mc99rq32MYYUAu/img/blur-layer---heavy.png",
    comets: "https://c.animaapp.com/mc99rq32MYYUAu/img/comets-2.svg",
  };

  return (
    <section className="relative w-full h-[480px] bg-grayscaledark-01 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Background images */}
        <img
          className="absolute w-full h-auto min-w-[1389px] top-[-240px] left-0"
          alt="Stars"
          src={images.stars1}
        />

        <img
          className="absolute w-full h-auto min-w-[2591px] top-[-10px] left-0"
          alt="Illustration"
          src={images.illustration}
        />

        <img
          className="absolute w-full h-auto min-w-[1389px] top-[-68px] left-0"
          alt="Stars"
          src={images.stars2}
        />

        <img
          className="absolute w-[476px] h-[476px] top-[-159px] left-[-213px]"
          alt="Group"
          src={images.group}
        />

        <img
          className="absolute w-[223px] h-[215px] top-[112px] left-[20px] bg-blend-multiply"
          alt="Blur layer heavy"
          src={images.blurLayer}
        />

        <img
          className="absolute w-[140px] h-[140px] top-[296px] right-[40px]"
          alt="Comets"
          src={images.comets}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="flex flex-col items-center gap-8 max-w-[640px] w-full">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="text-grayscaledark-12 font-3xl-dark-max text-[48px] font-medium leading-[105.99999237060547%] tracking-[0px] text-center">
                Get started for free
              </h2>

              <p className="text-grayscaledark-12 font-xl-body-max text-[22px] font-medium leading-[120.00000762939453%] tracking-[0.11px] text-center opacity-[0.74] max-w-[480px]">
                Build and test for as long as you need. <br />
                Pick a plan when you&apos;re ready.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="text-grayscaledark-12 bg-[#f9f9ff05] border-[#f9f9ff1a] rounded-xl font-sm-regular text-[14px] font-medium tracking-[0.2800000000000001px] leading-[140%]"
              >
                Start free trial
              </Button>

              <Button className="bg-brand-09 text-brand-01 rounded-xl font-sm-regular text-[14px] font-medium tracking-[0.2800000000000001px] leading-[140%] relative overflow-hidden">
                <div className="w-10 h-10 absolute top-[-15px] left-[41px] rounded-[20px] blur-[20px] bg-brand-06 opacity-80" />
                <span className="relative z-10">Schedule a demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
