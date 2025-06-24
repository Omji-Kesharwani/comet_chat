import React from "react";

const navItems = [
  { label: "Platform" },
  { label: "Solutions" },
  { label: "Developers" },
  { label: "Resources" },
  { label: "Pricing" },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <header
      style={{
        background: "#0A0914",
        boxShadow: "0 2px 24px 0 rgba(104,82,214,0.04)",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <img
        style={{
          height: "22px",
          width: "140px",
        }}
        alt="Logo"
        src="https://c.animaapp.com/mc99rq32MYYUAu/img/logo-1.svg"
      />

      <nav style={{ display: "none", gap: "40px" }} className="md:flex">
        <ul style={{ display: "flex", gap: "40px", margin: 0, padding: 0, listStyle: "none" }}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "0.08px",
                  color: "#FAFAFF",
                  opacity: 0.9,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="hover:text-[#6852D6] focus:text-[#6852D6]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button
          style={{
            padding: "8px 16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0.08px",
            color: "#FAFAFF",
            opacity: 0.8,
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 0.2s",
          }}
          className="hover:text-[#6852D6] focus:text-[#6852D6]"
        >
          Log in
        </button>

        <button
          style={{
            position: "relative",
            padding: "8px 20px",
            background: "#6852D6",
            borderRadius: "12px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0.08px",
            color: "#FAFAFF",
            boxShadow: "0 4px 24px 0 rgba(104,82,214,0.10)",
            overflow: "hidden",
            transition: "background 0.2s",
            border: "none",
          }}
          className="hover:bg-[#45368D] focus:bg-[#45368D]"
        >
          <span
            style={{
              position: "absolute",
              width: "32px",
              height: "32px",
              top: "-14px",
              left: "43px",
              borderRadius: "20px",
              filter: "blur(15px)",
              background: "#D8D2F4",
              opacity: 0.8,
              zIndex: 0,
            }}
          />
          <span style={{ position: "relative", zIndex: 1 }}>Schedule a demo</span>
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden flex items-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="28" height="2" rx="1" fill="#FAFAFF" />
          <rect y="13" width="28" height="2" rx="1" fill="#FAFAFF" />
          <rect y="20" width="28" height="2" rx="1" fill="#FAFAFF" />
        </svg>
      </div>
    </header>
  );
};
