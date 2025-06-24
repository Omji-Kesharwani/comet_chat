import React from "react";

const platformFeatures = [
  "Chat & Messaging",
  "Voice & Video Calls",
  "Security & Compliance",
  "Extensions",
  "Features at a glance",
  "Webhooks & Bots",
  "Moderation",
  "Analytics & Insights",
];

const platformImplementation = ["Widgets", "UI Kits", "SDKs & APIs"];

const platformTechnologies = [
  "React Chat SDK & API",
  "Angular Chat SDK & API",
  "Vue Chat SDK & API",
  "IOS Swift Chat SDK & API",
  "Android Kotlin Chat SDK & API",
  "Android Java Chat SDK & API",
  "React Native Chat SDK & API",
  "Ionic/Capacitor Chat SDK & API",
  "WordPress Chat SDK & API",
  "Lavarel/PHP Chat SDK & API",
  "Flutter Chat SDK & API",
  "Next.js Chat SDK & API",
];

const solutionsUseCases = [
  "Social Community",
  "Marketplace",
  "Healthcare",
  "Education",
  "Virtual Events",
  "On-Demand Service",
  "Dating Apps",
  "Gaming",
];

const solutionsOrgTypes = ["Enterprise", "Startups"];

const developersTechnologies = [
  "React",
  "Angular",
  "Vue",
  "IOS Swift",
  "Android Kotlin",
  "Android Java",
  "React Native",
  "Ionic/Capacitor",
  "WordPress",
  "Lavarel/PHP",
  "Flutter",
  "Next.js",
];

const developersDocumentation = [
  "Documentation",
  "Product updates",
  "Tutorials",
  "Open-source Apps",
  "Product status",
  "Glossary",
];

const resources = [
  "Customer stories",
  "Blog",
  "Give feedback",
  "Community forum",
  "Help center",
  "Partners",
];

const competitors = [
  "SendBird",
  "GetStream",
  "Applozic",
  "Twilio",
  "PubNub",
];

const company = [
  "About us",
  "Careers",
  "Partners",
  "Pricing",
  "Chat with us",
];

const socialMedia = [
  {
    name: "Facebook",
    icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/facebook.svg",
  },
  {
    name: "LinkedIn",
    icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/linkedin.svg",
  },
  {
    name: "Instagram",
    icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/instagram.svg",
  },
  {
    name: "Twitter",
    icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/twitter.svg",
  },
  {
    name: "GitHub",
    icon: "https://c.animaapp.com/mc99rq32MYYUAu/img/github.svg",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer
      style={{
        width: "100%",
        background: "#18162B",
        padding: "56px 0 40px 0",
        color: "#FAFAFF",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 56,
        }}
      >
        <img
          style={{ width: 180, marginLeft: 64, marginBottom: 24 }}
          alt="Logo"
          src="https://c.animaapp.com/mc99rq32MYYUAu/img/logo-2.svg"
        />

        <div
          style={{
            display: "flex",
            gap: 80,
            width: "100%",
            padding: "0 64px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Platform */}
          <div style={{ flex: 1, minWidth: 180 }}>
            <h3 style={{ color: "#6852D6", fontWeight: 600, fontSize: 18, marginBottom: 12 }}>
              Platform
            </h3>
            <div style={{ marginBottom: 16 }}>
              <div style={{ opacity: 0.54, fontWeight: 500, fontSize: 14, marginBottom: 8 }}>
                Features
              </div>
              {platformFeatures.map((feature, i) => (
                <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                  {feature}
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ opacity: 0.54, fontWeight: 500, fontSize: 14, marginBottom: 8 }}>
                Implementation
              </div>
              {platformImplementation.map((item, i) => (
                <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                  {item}
                </div>
              ))}
            </div>
            <div>
              <div style={{ opacity: 0.54, fontWeight: 500, fontSize: 14, marginBottom: 8 }}>
                Technologies
              </div>
              {platformTechnologies.map((tech, i) => (
                <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          {/* Solutions */}
          <div style={{ flex: 1, minWidth: 180 }}>
            <h3 style={{ color: "#6852D6", fontWeight: 600, fontSize: 18, marginBottom: 12 }}>
              Solutions
            </h3>
            <div style={{ marginBottom: 16 }}>
              <div style={{ opacity: 0.54, fontWeight: 500, fontSize: 14, marginBottom: 8 }}>
                By Use cases
              </div>
              {solutionsUseCases.map((useCase, i) => (
                <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                  {useCase}
                </div>
              ))}
            </div>
            <div>
              <div style={{ opacity: 0.54, fontWeight: 500, fontSize: 14, marginBottom: 8 }}>
                By Organization Type
              </div>
              {solutionsOrgTypes.map((orgType, i) => (
                <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                  {orgType}
                </div>
              ))}
            </div>
          </div>
          {/* Developers */}
          <div style={{ flex: 1, minWidth: 180 }}>
            <h3 style={{ color: "#6852D6", fontWeight: 600, fontSize: 18, marginBottom: 12 }}>
              Developers
            </h3>
            <div style={{ marginBottom: 16 }}>
              <div style={{ opacity: 0.54, fontWeight: 500, fontSize: 14, marginBottom: 8 }}>
                Technologies documentation
              </div>
              {developersTechnologies.map((tech, i) => (
                <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                  {tech}
                </div>
              ))}
            </div>
            <div>
              <div style={{ opacity: 0.54, fontWeight: 500, fontSize: 14, marginBottom: 8 }}>
                Documentation
              </div>
              {developersDocumentation.map((doc, i) => (
                <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                  {doc}
                </div>
              ))}
            </div>
          </div>
          {/* Resources */}
          <div style={{ flex: 1, minWidth: 180 }}>
            <h3 style={{ color: "#6852D6", fontWeight: 600, fontSize: 18, marginBottom: 12 }}>
              Resources
            </h3>
            {resources.map((resource, i) => (
              <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                {resource}
              </div>
            ))}
            <h3 style={{ color: "#6852D6", fontWeight: 600, fontSize: 18, margin: "24px 0 12px 0" }}>
              Competitors
            </h3>
            {competitors.map((competitor, i) => (
              <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                {competitor}
              </div>
            ))}
          </div>
          {/* Company */}
          <div style={{ flex: 1, minWidth: 180 }}>
            <h3 style={{ color: "#6852D6", fontWeight: 600, fontSize: 18, marginBottom: 12 }}>
              Company
            </h3>
            {company.map((item, i) => (
              <div key={i} style={{ opacity: 0.84, fontSize: 14, marginBottom: 4 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: "url('https://c.animaapp.com/mc99rq32MYYUAu/img/divider.svg') repeat-x",
            margin: "40px 0",
          }}
        />
        {/* Bottom row: copyright, legal, social */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 64px",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ opacity: 0.74, fontSize: 14 }}>2023 © CometChat</span>
            <span style={{ opacity: 0.84, fontSize: 14 }}>Terms of Use</span>
            <span style={{ opacity: 0.84, fontSize: 14 }}>Privacy Policy</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {socialMedia.map((social, i) => (
              <a
                key={i}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  color: "#FAFAFF",
                  textDecoration: "none",
                  opacity: 0.84,
                  fontSize: 14,
                }}
              >
                <img src={social.icon} alt={social.name} style={{ width: 16, height: 16 }} />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};