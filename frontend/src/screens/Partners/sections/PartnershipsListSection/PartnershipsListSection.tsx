import { Card, CardContent } from "../../../../components/ui/card";

export const PartnershipsListSection = (): JSX.Element => {
  // Define partnership benefits data for easier mapping
  const partnershipBenefits = [
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/scale-01.svg",
      iconAlt: "Scale",
      title: "Free credits",
      description: "Empowering partners to scale.",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/coins.svg",
      iconAlt: "Coins",
      title: "Revenue share",
      description: "Get monthly recurring revenues when you refer clients.",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/stand.svg",
      iconAlt: "Stand",
      title: "Training and mentoring sessions",
      description: "Enabling partners to deliver the best experience.",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/code-square-02.svg",
      iconAlt: "Code square",
      title: "Special developer access",
      description:
        "Get an all-access account to build unlimited PoCs for your clients.",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/clock.svg",
      iconAlt: "Clock",
      title: "Reduced time",
      description:
        "Deliver your products much faster with our partners' programs.",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/bar-chart-square-02.svg",
      iconAlt: "Bar chart square",
      title: "Value addition to your users",
      description: "We need a 2 line text here",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/book-closed.svg",
      iconAlt: "Book closed",
      title: "Knowledge sessions",
      description: "Access to product and market sessions.",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/help-circle.svg",
      iconAlt: "Help circle",
      title: "On-demand support",
      description: "Technical assistance for implementation.",
    },
    {
      icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/coins-hand.svg",
      iconAlt: "Coins hand",
      title: "Significant passive income",
      description: "We need a 2 line text here",
    },
  ];

  // Group benefits into rows of 3 for better layout management
  const benefitRows = [
    partnershipBenefits.slice(0, 3),
    partnershipBenefits.slice(3, 6),
    partnershipBenefits.slice(6, 9),
  ];

  return (
    <section className="w-full bg-grayscaledark-01 py-12 pb-20 px-4 md:px-16">
      <div className="w-full flex flex-col gap-16">
        {benefitRows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16"
          >
            {row.map((benefit, index) => (
              <Card
                key={`benefit-${rowIndex}-${index}`}
                className="bg-transparent border-0 shadow-none"
              >
                <CardContent className="p-0 flex flex-col gap-3">
                  <div className="bg-[#ff7f3e1f] inline-flex items-center justify-center p-2.5 rounded-full">
                    <img
                      className="w-[18px] h-[18px]"
                      alt={benefit.iconAlt}
                      src={benefit.icon}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-lg-heding-light-max font-[number:var(--lg-heding-light-max-font-weight)] text-grayscaledark-12 text-[length:var(--lg-heding-light-max-font-size)] tracking-[var(--lg-heding-light-max-letter-spacing)] leading-[var(--lg-heding-light-max-line-height)] [font-style:var(--lg-heding-light-max-font-style)]">
                      {benefit.title}
                    </h3>
                    <p className="opacity-[0.74] font-lg-body-max font-[number:var(--lg-body-max-font-weight)] text-grayscaledark-12 text-[length:var(--lg-body-max-font-size)] tracking-[var(--lg-body-max-letter-spacing)] leading-[var(--lg-body-max-line-height)] [font-style:var(--lg-body-max-font-style)]">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
