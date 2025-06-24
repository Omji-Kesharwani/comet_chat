import React from "react";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroFormSection } from "./sections/HeroFormSection";
import { LabelTitleSection } from "./sections/LabelTitleSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { PartnershipsListSection } from "./sections/PartnershipsListSection";
import { PartnershipsListWrapperSection } from "./sections/PartnershipsListWrapperSection";
import { PreFooterSection } from "./sections/PreFooterSection";
import { TitleBlockSection } from "./sections/TitleBlockSection";

export const Partners = (): JSX.Element => {
  // Partner logos data for the showcase section
  const partnerLogos = [
    {
      alt: "Image",
      src: "https://c.animaapp.com/mc99rq32MYYUAu/img/image-202.png",
      width: "w-[50.02px]",
      height: "h-8",
      className: "ml-[-94.96px]",
    },
    {
      alt: "Amazon web services",
      src: "https://c.animaapp.com/mc99rq32MYYUAu/img/amazon-web-services-2-1.svg",
      width: "w-[53.51px]",
      height: "h-8",
      className: "",
    },
    {
      alt: "Element genomics",
      src: "https://c.animaapp.com/mc99rq32MYYUAu/img/10x-genomics--1--1.svg",
      width: "w-[121.46px]",
      height: "h-7",
      className: "",
    },
    {
      alt: "Microsoft",
      src: "https://c.animaapp.com/mc99rq32MYYUAu/img/microsoft-1.svg",
      width: "w-[131.09px]",
      height: "h-7",
      className: "",
    },
    {
      alt: "Path",
      src: "https://c.animaapp.com/mc99rq32MYYUAu/img/path2.svg",
      width: "w-[147.96px]",
      height: "h-[22px]",
      className: "",
    },
    {
      alt: "Logo",
      src: "https://c.animaapp.com/mc99rq32MYYUAu/img/logo.png",
      width: "w-[134.58px]",
      height: "h-6",
      className: "",
    },
    {
      alt: "Teknopoint DEPT",
      src: "https://c.animaapp.com/mc99rq32MYYUAu/img/teknopoint-dept--black-1.png",
      width: "w-[161.1px]",
      height: "h-7",
      className: "",
    },
    {
      type: "complex",
      className: "relative w-[60.71px] h-8",
      content: [
        {
          type: "image",
          alt: "Vector",
          src: "https://c.animaapp.com/mc99rq32MYYUAu/img/vector.svg",
          className: "absolute w-[3px] h-[11px] top-[21px] left-[17px]",
        },
        {
          type: "image",
          alt: "Group",
          src: "https://c.animaapp.com/mc99rq32MYYUAu/img/group.png",
          className: "absolute w-[61px] h-8 top-0 left-0",
        },
      ],
    },
    {
      alt: "Homemainlogo",
      src: "https://c.animaapp.com/mc99rq32MYYUAu/img/homemainlogo--1--1.png",
      width: "w-8",
      height: "h-8",
      className: "object-cover",
    },
    {
      type: "complex",
      className: "relative w-[161.48px] h-8 mr-[-94.96px]",
      content: [
        {
          type: "image",
          alt: "Seekpng",
          src: "https://c.animaapp.com/mc99rq32MYYUAu/img/seekpng-1.png",
          className: "absolute w-8 h-8 top-0 left-0",
        },
        {
          type: "image",
          alt: "Seekpng",
          src: "https://c.animaapp.com/mc99rq32MYYUAu/img/seekpng-2.png",
          className: "absolute w-[119px] h-[15px] top-[9px] left-[43px]",
        },
      ],
    },
  ];

  return (
    <div
      className="bg-[#f9f9ff] flex flex-row justify-center w-full"
      data-model-id="1:6795"
    >
      <div className="bg-grayscale-01 w-full max-w-[1440px] relative">
        {/* Navigation and Hero Section */}
        <div className="w-full">
          <NavigationBarSection />
          <HeroFormSection />
        </div>

        {/* Partners Logo Showcase */}
        <div className="flex flex-col items-center justify-center w-full max-w-[1440px] min-h-[176px] border-b border-[#E4E4ED] pt-16 pb-20 gap-8 bg-grayscaledark-01 mx-auto">
          <div className="flex flex-row items-center justify-center w-full max-w-[1440px] min-h-[32px] gap-16 opacity-[0.54] px-4">
            {partnerLogos.map((logo, index) =>
              logo.type === "complex" ? (
                <div key={`complex-logo-${index}`} className={logo.className}>
                  {logo.content.map((item, itemIndex) => (
                    <img
                      key={`complex-logo-item-${index}-${itemIndex}`}
                      className={item.className}
                      alt={item.alt}
                      src={item.src}
                    />
                  ))}
                </div>
              ) : (
                <img
                  key={`logo-${index}`}
                  className={`relative ${logo.width} ${logo.height} ${logo.className}`}
                  alt={logo.alt}
                  src={logo.src}
                />
              ),
            )}
          </div>
        </div>

        {/* Main Content Sections */}
        <TitleBlockSection />
        <PartnershipsListSection />
        <LabelTitleSection />
        <PartnershipsListWrapperSection />
        <FaqSection />
        <PreFooterSection />
        <FooterSection />
      </div>
    </div>
  );
};
