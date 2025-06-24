import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const HeroFormSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[856px] bg-grayscaledark-01 overflow-hidden">
      <div className="absolute inset-0">
        {/* Cosmic background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C1B2D] via-[#0A0914] to-[#0A0914]"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://c.animaapp.com/mc99rq32MYYUAu/img/texture.png')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0914] via-transparent to-[#0A0914]"></div>
        
        {/* Stars */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://c.animaapp.com/mc99rq32MYYUAu/img/stars.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100% auto',
        }}></div>
        
     
        <div
          className="absolute left-0"
          style={{
            top: '413px',
            width: '1440px',
            height: '233px',
            background: 'linear-gradient(180deg, rgba(10, 9, 20, 0) 0%, #0A0914 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Comet Layer */}
        <div
          className="absolute"
          style={{
            top: '467px',
            left: '168px',
            width: '160px',
            height: '160px',
            pointerEvents: 'none',
          }}
        >
          {/* Shadow - blurred circular effect behind comet */}
          <div
            className="absolute rounded-full z-0"
            style={{
              top: '-30px',
              left: '-30px',
              width: '220px',
              height: '220px',
              background: 'linear-gradient(224.11deg, #FFB590 2.62%, #FF7F3E 32.98%, #45368D 91.45%)',
              opacity: 0.4,
              filter: 'blur(60px)',
            }}
          />
          {/* Main comet - radial gradient and soft shadow */}
          <div
            className="absolute rounded-full shadow-[0_0_40px_rgba(232,110,47,0.15)]"
            style={{
              top: 0,
              left: 0,
              width: '160px',
              height: '160px',
              background: 'radial-gradient(circle at top right, #e86e2f 0%, #1a0e2a 70%, #0A0914 100%)',
            }}
          />
          {/* Circular blurred gradient glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] z-0"
            style={{
              background: 'linear-gradient(224.11deg, #FFB590 2.62%, #FF7F3E 32.98%, #45368D 91.45%)',
              opacity: 0.1,
              top: 0,
              left: 0,
            }}
          />
        </div>
        
        {/* Comets and orbits */}
        {/* <img src="https://c.animaapp.com/mc99rq32MYYUAu/img/comets-4.svg" className="absolute w-[314px] h-[314px] top-[444px] right-[-80px]" alt="Comet" />
        <img src="https://c.animaapp.com/mc99rq32MYYUAu/img/comets.svg" className="absolute w-20 h-20 top-[546px] left-[754px]" alt="Comet" />
        <img src="https://c.animaapp.com/mc99rq32MYYUAu/img/orbit.svg" className="absolute w-[1243px] h-[475px] bottom-0 left-[133px]" alt="Orbit" />
        <img src="https://c.animaapp.com/mc99rq32MYYUAu/img/comets-3.svg" className="absolute w-40 h-40 bottom-[32px] left-[228px]" alt="Comet" />
        <img src="https://c.animaapp.com/mc99rq32MYYUAu/img/comets-1.svg" className="absolute w-[120px] h-[120px] top-[403px] left-0" alt="Comet" />
         */}
        {/* Glowing elements */}
        <div className="absolute w-[33px] h-8 top-64 right-32 opacity-60 bg-[#6852D6] rounded-full blur-xl"></div>
        <div className="absolute w-[51px] h-[50px] top-[195px] left-28 opacity-20 bg-[#6852D6] rounded-full blur-xl"></div>
        <div className="absolute w-[18px] h-[18px] top-[282px] left-[296px] opacity-40 bg-[#6852D6] rounded-full blur-lg"></div> 
         
        {/* Star */}
        <div
          className="absolute"
          style={{
            width: '24px',
            height: '24px',
            top: '634.35px',
            left: '96px',
            background: 'rgba(70, 66, 90, 0.18)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            transform: 'rotate(20deg)',
            filter: 'blur(0.5px)',
            pointerEvents: 'none',
          }}
        />

        {/* Radial gradient border effect */}
        <div
          className="absolute"
          style={{
            width: '1211.03px',
            height: '259.99px',
            top: '281px',
            left: '1263.89px',
            border: '1px solid',
            borderImage: 'radial-gradient(43.19% 357.15% at 90.97% 79.01%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
            transform: 'rotate(-169.54deg)',
            pointerEvents: 'none',
          }}
        />

        {/* Planet: udarvis */}
        <div
          className="absolute"
          style={{
            top: '478px',
            left: '694px',
            width: '80px',
            height: '80px',
            transform: 'rotate(0deg)',
            pointerEvents: 'none',
          }}
        >
          {/* Shadow - blurred circular effect behind planet */}
          <div
            className="absolute rounded-full z-0"
            style={{
              top: '-15px',
              left: '-15px',
              width: '110px',
              height: '110px',
              background: 'linear-gradient(224.11deg, #FFB590 2.62%, #FF7F3E 32.98%, #45368D 91.45%)',
              opacity: 0.4,
              filter: 'blur(30px)',
            }}
          />
          {/* Main planet - radial gradient and soft shadow */}
          <div
            className="absolute rounded-full shadow-[0_0_20px_rgba(232,110,47,0.15)]"
            style={{
              top: 0,
              left: 0,
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle at 60% 40%, #FFE5D8 0%, #FFD2BB 40%, #604BC5 100%)',
            }}
          />
          {/* Circular blurred gradient glow */}
          <div
            className="absolute rounded-full blur-[60px] z-0"
            style={{
              width: '250px',
              height: '250px',
              background: 'linear-gradient(224.11deg, #FFB590 2.62%, #FF7F3E 32.98%, #45368D 91.45%)',
              opacity: 0.1,
              top: 0,
              left: 0,
            }}
          />
        </div>

        {/* Planet: comet at 256px */}
        <div
          className="absolute"
          style={{
            top: '442.26px',
            left: '1605.54px',
            width: '256px',
            height: '256px',
            transform: 'rotate(165deg)',
            pointerEvents: 'none',
          }}
        >
          {/* Shadow - blurred circular effect behind planet */}
          <div
            className="absolute rounded-full z-0"
            style={{
              top: '-48px',
              left: '-48px',
              width: '352px',
              height: '352px',
              background: 'linear-gradient(224.11deg, #FFB590 2.62%, #FF7F3E 32.98%, #45368D 91.45%)',
              opacity: 0.4,
              filter: 'blur(96px)',
            }}
          />
          {/* Main planet - radial gradient and soft shadow */}
          <div
            className="absolute rounded-full shadow-[0_0_64px_rgba(232,110,47,0.15)]"
            style={{
              top: 0,
              left: 0,
              width: '256px',
              height: '256px',
              background: 'radial-gradient(circle at 60% 40%, #FFE5D8 0%, #FFD2BB 40%, #604BC5 100%)',
            }}
          />
          {/* Circular blurred gradient glow */}
          <div
            className="absolute rounded-full blur-[192px] z-0"
            style={{
              width: '800px',
              height: '800px',
              background: 'linear-gradient(224.11deg, #FFB590 2.62%, #FF7F3E 32.98%, #45368D 91.45%)',
              opacity: 0.1,
              top: 0,
              left: 0,
            }}
          />
        </div>
      </div>

      {/* Content container */}
      <div className="flex justify-between items-center px-16 pt-[256px] relative z-10">
        {/* Left side - Hero text */}
        <div className="flex flex-col gap-[20px] w-[480px] min-h-[200px] absolute top-[188px] left-[176px]">
          <h1 className="font-3xl-dark-max text-grayscaledark-12 text-[48px] font-medium leading-[105.99999237060547%] tracking-[0px]">
            Join the CometChat partner universe
          </h1>
          <p className="opacity-[0.74] font-xl-body-max text-grayscaledark-12 text-[22px] font-medium leading-[120.00000762939453%] tracking-[0.11px]">
            Create value for your clients, leveraging our world-class
            technology. Partner with us and grow your business!
          </p>
        </div>

        {/* Right side - Form card */}
        <Card
          className="w-[528px] h-[434px] border-[#f9f9ff0a] rounded-3xl absolute top-[132px] left-[736px]"
          style={{
            background: 'linear-gradient(90deg, #45368D 0%, #1f1c3e 100%)',
          }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="absolute top-[32px] left-[32px] w-[464px] h-[34px] font-2xl-dark-max font-[600] text-[32px] leading-[106%] tracking-[0px]" style={{ color: '#FAFAFF' }}>
              Become a partner
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Full name field */}
            <div className="absolute top-[98px] left-[32px] flex flex-col gap-[6px] w-[464px] h-[68px] opacity-[74%]">
              <label className="w-[464px] h-[18px] opacity-[74%] font-md-light font-[640] text-[16px] leading-[112%] tracking-[0.5%] text-grayscaledark-12">
                Full name
              </label>
              <Input
                className="w-[464px] h-[44px] rounded-[14px] border-[1px] border-[#FAFAFF1A] py-[13px] px-[16px] opacity-[64%]"
                placeholder="Type your name here..."
              />
            </div>

            {/* Email address field */}
            <div className="absolute top-[172px] left-[32px] flex flex-col gap-[6px] w-[464px] h-[68px]">
              <label className="w-[464px] h-[18px] opacity-[74%] font-md-light font-[640] text-[16px] leading-[112%] tracking-[0.5%] text-grayscaledark-12">
                Email address
              </label>
              <div className="relative w-[464px] h-[44px]">
                <MailIcon className="absolute top-[14px] left-[16px] w-[14.67px] h-[12px] text-[#FAFAFF]" />
                <Input
                  className="w-full rounded-[14px] border-[1px] border-[#FAFAFF1A] py-[13px] pl-[40px] pr-[16px] opacity-[64%]"
                  placeholder="Type your emailsomething..."
                />
              </div>
            </div>

            {/* Company name field */}
            <div className="absolute top-[266px] left-[32px] flex flex-col gap-[8px] w-[464px] h-[68px]">
              <label className="w-[464px] h-[18px] opacity-[74%] font-md-light text-grayscaledark-12 text-[16px] font-normal leading-[112%] tracking-[0.08px]">
                Company name
              </label>
              <Input
                className="w-[464px] h-[44px] rounded-[14px] border-[1px] border-[#FAFAFF1A] py-[13px] px-[16px] opacity-[64%]"
                placeholder="Type your company's name"
              />
            </div>

            {/* Submit button */}
            <Button className="overflow-hidden relative w-[157px] h-[44px] top-[320px] left-[10px] flex flex-row items-center justify-center gap-[10px] rounded-[12px] px-[16px] py-[12px] bg-branddark-09 text-brand-01 font-sm-regular text-[14px] font-medium tracking-[0.28px] leading-[140%]">
              <div className="w-8 h-8 rounded-2xl rotate-[145.28deg] blur-[15px] absolute bg-brand-06 opacity-80"/>
              <span className="relative">Submit application</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
