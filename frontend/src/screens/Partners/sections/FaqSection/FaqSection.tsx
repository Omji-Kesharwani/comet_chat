import React from "react";

const faqItems = [
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    question: "This is a frequently asked question?",
    answer: "",
  },
  {
    question: "This is a very long frequently asked question about our services with more than one line?",
    answer: "",
  },
  {
    question: "This is a frequently asked question?",
    answer: "",
  },
  {
    question: "This is a question?",
    answer: "",
  },
  {
    question: "This is a question?",
    answer: "",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section
      style={{
        width: "100%",
        background: "#FAFAFF",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 64 }}>
        <h3
          style={{
            fontFamily: "Satoshi Variable, Helvetica, sans-serif",
            fontWeight: 400,
            fontSize: 22,
            color: "#FF7129",
            margin: 0,
          }}
        >
          FAQ&apos;s
        </h3>
        <h2
          style={{
            fontFamily: "Satoshi Variable, Helvetica, sans-serif",
            fontWeight: 400,
            fontSize: 48,
            color: "#14131D",
            margin: 0,
            maxWidth: 528,
            textAlign: "center",
          }}
        >
          We want to help you with all your doubts
        </h2>
      </div>
      {/* FAQ Accordion */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 751 }}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: 16,
                borderRadius: 20,
                border: "1px solid #14131d0a",
                background: "rgba(20,19,29,0.02)",
                backdropFilter: "blur(20px) brightness(100%)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "24px",
                  fontFamily: "Satoshi Variable, Helvetica, sans-serif",
                  fontWeight: 400,
                  fontSize: 22,
                  color: "#14131D",
                  opacity: index !== 0 ? 0.74 : 1,
                  cursor: "pointer",
                }}
              >
                {item.question}
              </div>
              {item.answer && (
                <div
                  style={{
                    padding: "0 24px 24px 24px",
                    fontFamily: "Satoshi Variable, Helvetica, sans-serif",
                    fontWeight: 500,
                    fontSize: 22,
                    color: "#14131D",
                    opacity: 0.74,
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};