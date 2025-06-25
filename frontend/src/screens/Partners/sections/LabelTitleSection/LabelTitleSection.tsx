import React from "react";

export const LabelTitleSection = (): JSX.Element => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-start",
        gap: "10px",
        padding: "64px",
      }}
    >
      <div style={{ maxWidth: 528, display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3
          style={{
            fontFamily: "Satoshi Variable, Helvetica, sans-serif",
            fontWeight: 400,
            fontSize: 22,
            color: "#6852D6",
            margin: 0,
          }}
        >
          Our programs
        </h3>
        <h2
          style={{
            fontFamily: "Satoshi Variable, Helvetica, sans-serif",
            fontWeight: 400,
            fontSize: 48,
            color: "#14131D",
            margin: 0,
          }}
        >
          Types of partnerships programs
        </h2>
      </div>
    </section>
  );
};