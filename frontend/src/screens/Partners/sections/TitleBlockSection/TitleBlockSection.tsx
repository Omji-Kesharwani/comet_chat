import React from "react";

export const TitleBlockSection = (): JSX.Element => {
  return (
    <section
      style={{
        width: "100%",
        padding: "100px 64px 64px 64px",
        background: "#0A0914",
        display: "block",
      }}
    >
      <div
        style={{
          maxWidth: 528,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 12,
          textAlign: "left",
        }}
      >
        <h3
          style={{
            fontFamily: "Satoshi Variable, Helvetica, sans-serif",
            fontWeight: 400,
            fontSize: 22,
            color: "#FF7129",
            margin: 0,
          }}
        >
          Be a partner
        </h3>
        <h2
          style={{
            fontFamily: "Satoshi Variable, Helvetica, sans-serif",
            fontWeight: 500,
            fontSize: 48,
            color: "#FAFAFF",
            margin: 0,
            lineHeight: "1.1",
          }}
        >
          CometChat partner<br />advantages
        </h2>
      </div>
    </section>
  );
};