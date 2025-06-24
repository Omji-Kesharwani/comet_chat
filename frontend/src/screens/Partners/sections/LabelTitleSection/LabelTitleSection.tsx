

export const LabelTitleSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 py-16 px-16">
      <div className="flex flex-col max-w-[528px] items-start gap-3">
        <h3 className="font-xl-heding-light-max font-[number:var(--xl-heding-light-max-font-weight)] text-brand-09 text-[length:var(--xl-heding-light-max-font-size)] tracking-[var(--xl-heding-light-max-letter-spacing)] leading-[var(--xl-heding-light-max-line-height)] [font-style:var(--xl-heding-light-max-font-style)]">
          Our programs
        </h3>

        <h2 className="max-w-[528px] font-3xl-light-max font-[number:var(--3xl-light-max-font-weight)] text-grayscale-12 text-[length:var(--3xl-light-max-font-size)] tracking-[var(--3xl-light-max-letter-spacing)] leading-[var(--3xl-light-max-line-height)] [font-style:var(--3xl-light-max-font-style)]">
          Types of partnerships programs
        </h2>
      </div>
    </section>
  );
};
