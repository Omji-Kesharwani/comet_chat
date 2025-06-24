import React from "react";

export const TitleBlockSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 pt-[100px] px-16 bg-grayscaledark-01">
      <div className="flex flex-col items-start gap-3 max-w-[528px]">
        <h3 className="font-xl-heding-dark-max font-[number:var(--xl-heding-dark-max-font-weight)] text-orangedark-09 text-[length:var(--xl-heding-dark-max-font-size)] tracking-[var(--xl-heding-dark-max-letter-spacing)] leading-[var(--xl-heding-dark-max-line-height)] [font-style:var(--xl-heding-dark-max-font-style)]">
          Be a partner
        </h3>
        <h2 className="font-3xl-dark-max font-[number:var(--3xl-dark-max-font-weight)] text-grayscaledark-12 text-[length:var(--3xl-dark-max-font-size)] tracking-[var(--3xl-dark-max-letter-spacing)] leading-[var(--3xl-dark-max-line-height)] [font-style:var(--3xl-dark-max-font-style)] max-w-[528px]">
          CometChat partner advantages
        </h2>
      </div>
    </section>
  );
};
