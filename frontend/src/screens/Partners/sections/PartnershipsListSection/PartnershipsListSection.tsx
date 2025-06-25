import React from "react";

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
    description: "Get an all-access account to build unlimited PoCs for your clients.",
  },
  {
    icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/clock.svg",
    iconAlt: "Clock",
    title: "Reduced time",
    description: "Deliver your products much faster with our partners' programs.",
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

export const PartnershipsListSection = (): JSX.Element => {
  return (
    <section
      style={{
        width: "100%",
        background: "#18162B",
        padding: "48px 64px 80px 64px",
      }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {partnershipBenefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  background: "#ff7f3e1f",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{ width: 18, height: 18 }}
                  alt={benefit.iconAlt}
                  src={benefit.icon}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <h3
                  style={{
                    fontFamily: "Satoshi Variable, Helvetica, sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    color: "#FAFAFF",
                    margin: 0,
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Satoshi Variable, Helvetica, sans-serif",
                    fontWeight: 500,
                    fontSize: 18,
                    color: "#FAFAFF",
                    opacity: 0.74,
                    margin: 0,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};