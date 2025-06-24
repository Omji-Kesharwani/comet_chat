import React from "react";

export const HeroFormSection = (): JSX.Element => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "856px",
        background: "#18162B",
        overflow: "hidden",
      }}
    >
      {/* Background layers */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, #1C1B2D 0%, #0A0914 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          backgroundImage: "url('https://c.animaapp.com/mc99rq32MYYUAu/img/texture.png')",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #0A0914 0%, transparent 50%, #0A0914 100%)",
        }}
      />
      {/* Stars */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://c.animaapp.com/mc99rq32MYYUAu/img/stars.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "100% auto",
        }}
      />
      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "256px 64px 0 64px",
          height: "100%",
        }}
      >
        {/* Left: Headline and subtext */}
        <div style={{ width: 480, minHeight: 200 }}>
          <h1
            style={{
              fontFamily: "Satoshi Variable, Helvetica, sans-serif",
              fontWeight: 500,
              fontSize: 48,
              color: "#FAFAFF",
              lineHeight: "106%",
              marginBottom: 20,
            }}
          >
            Join the CometChat partner universe
          </h1>
          <p
            style={{
              fontFamily: "Satoshi Variable, Helvetica, sans-serif",
              fontWeight: 500,
              fontSize: 22,
              color: "#FAFAFF",
              opacity: 0.74,
              lineHeight: "120%",
            }}
          >
            Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
          </p>
        </div>
        {/* Right: Form card */}
        <div
          style={{
            width: 528,
            height: 434,
            borderRadius: 24,
            background: "linear-gradient(90deg, #45368D 0%, #1f1c3e 100%)",
            boxShadow: "0 8px 32px 0 rgba(69,54,141,0.10)",
            padding: 32,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <h2
            style={{
              color: "#FAFAFF",
              fontFamily: "Satoshi Variable, Helvetica, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              marginBottom: 32,
            }}
          >
            Become a partner
          </h2>
          <form style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <label style={{ color: "#FAFAFF", opacity: 0.74, fontWeight: 500, fontSize: 16 }}>
              Full name
              <input
                style={{
                  width: "100%",
                  height: 44,
                  borderRadius: 14,
                  border: "1px solid #FAFAFF1A",
                  padding: "13px 16px",
                  marginTop: 6,
                  background: "rgba(255,255,255,0.04)",
                  color: "#FAFAFF",
                  fontSize: 16,
                  fontFamily: "inherit",
                  opacity: 0.64,
                }}
                placeholder="Type your name here..."
              />
            </label>
            <label style={{ color: "#FAFAFF", opacity: 0.74, fontWeight: 500, fontSize: 16 }}>
              Email address
              <input
                style={{
                  width: "100%",
                  height: 44,
                  borderRadius: 14,
                  border: "1px solid #FAFAFF1A",
                  padding: "13px 16px",
                  marginTop: 6,
                  background: "rgba(255,255,255,0.04)",
                  color: "#FAFAFF",
                  fontSize: 16,
                  fontFamily: "inherit",
                  opacity: 0.64,
                }}
                placeholder="Type your email here..."
              />
            </label>
            <label style={{ color: "#FAFAFF", opacity: 0.74, fontWeight: 500, fontSize: 16 }}>
              Company name
              <input
                style={{
                  width: "100%",
                  height: 44,
                  borderRadius: 14,
                  border: "1px solid #FAFAFF1A",
                  padding: "13px 16px",
                  marginTop: 6,
                  background: "rgba(255,255,255,0.04)",
                  color: "#FAFAFF",
                  fontSize: 16,
                  fontFamily: "inherit",
                  opacity: 0.64,
                }}
                placeholder="Type your company's name"
              />
            </label>
            <button
              type="submit"
              style={{
                marginTop: 16,
                width: 157,
                height: 44,
                borderRadius: 12,
                background: "#6852D6",
                color: "#FAFAFF",
                fontWeight: 500,
                fontSize: 14,
                fontFamily: "Inter, sans-serif",
                position: "relative",
                overflow: "hidden",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  top: -15,
                  left: 41,
                  borderRadius: 20,
                  filter: "blur(15px)",
                  background: "#D8D2F4",
                  opacity: 0.8,
                  zIndex: 0,
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>Submit application</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};