import React from "react";

export const PreFooterSection = (): JSX.Element => {
  const images = {
    stars1: "https://c.animaapp.com/mc99rq32MYYUAu/img/stars-1.png",
    stars2: "https://c.animaapp.com/mc99rq32MYYUAu/img/stars-2.png",
    illustration: "https://c.animaapp.com/mc99rq32MYYUAu/img/illustration.png",
    group: "https://c.animaapp.com/mc99rq32MYYUAu/img/group-1.png",
    blurLayer: "https://c.animaapp.com/mc99rq32MYYUAu/img/blur-layer---heavy.png",
    comets: "https://c.animaapp.com/mc99rq32MYYUAu/img/comets-2.svg",
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: 480,
        background: "#18162B",
        overflow: "hidden",
      }}
    >
      {/* Background images */}
      <img
        style={{
          position: "absolute",
          width: "100%",
          minWidth: 1389,
          top: -240,
          left: 0,
        }}
        alt="Stars"
        src={images.stars1}
      />
      <img
        style={{
          position: "absolute",
          width: "100%",
          minWidth: 2591,
          top: -10,
          left: 0,
        }}
        alt="Illustration"
        src={images.illustration}
      />
      <img
        style={{
          position: "absolute",
          width: "100%",
          minWidth: 1389,
          top: -68,
          left: 0,
        }}
        alt="Stars"
        src={images.stars2}
      />
      <img
        style={{
          position: "absolute",
          width: 476,
          height: 476,
          top: -159,
          left: -213,
        }}
        alt="Group"
        src={images.group}
      />
      <img
        style={{
          position: "absolute",
          width: 223,
          height: 215,
          top: 112,
          left: 20,
          backgroundBlendMode: "multiply",
        }}
        alt="Blur layer heavy"
        src={images.blurLayer}
      />
      <img
        style={{
          position: "absolute",
          width: 140,
          height: 140,
          top: 296,
          right: 40,
        }}
        alt="Comets"
        src={images.comets}
      />
      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32, maxWidth: 640, width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: "100%" }}>
            <h2
              style={{
                color: "#FAFAFF",
                fontFamily: "Satoshi Variable, Helvetica, sans-serif",
                fontWeight: 500,
                fontSize: 48,
                textAlign: "center",
                margin: 0,
              }}
            >
              Get started for free
            </h2>
            <p
              style={{
                color: "#FAFAFF",
                fontFamily: "Satoshi Variable, Helvetica, sans-serif",
                fontWeight: 500,
                fontSize: 22,
                textAlign: "center",
                opacity: 0.74,
                maxWidth: 480,
                margin: 0,
              }}
            >
              Build and test for as long as you need. <br />
              Pick a plan when you&apos;re ready.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              style={{
                color: "#FAFAFF",
                background: "rgba(249,249,255,0.02)",
                border: "1px solid #f9f9ff1a",
                borderRadius: 12,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                padding: "12px 24px",
                cursor: "pointer",
                marginRight: 8,
              }}
            >
              Start free trial
            </button>
            <button
              style={{
                background: "#6852D6",
                color: "#FCFCFE",
                borderRadius: 12,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                padding: "12px 24px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: 40,
                  height: 40,
                  top: -15,
                  left: 41,
                  borderRadius: 20,
                  filter: "blur(20px)",
                  background: "#D8D2F4",
                  opacity: 0.8,
                  zIndex: 0,
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>Schedule a demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};