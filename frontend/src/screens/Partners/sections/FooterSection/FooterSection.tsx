import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Platform section data
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

  // Solutions section data
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

  // Developers section data
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

  // Resources section data
  const resources = [
    "Customer stories",
    "Blog",
    "Give feedback",
    "Community forum",
    "Help center",
    "Partners",
  ];

  // Competitors section data
  const competitors = ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"];

  // Company section data
  const company = [
    "About us",
    "Careers",
    "Partners",
    "Pricing",
    "Chat with us",
  ];

  // Social media data
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

  return (
    <footer className="flex flex-col w-full items-start pt-14 pb-10 px-0 bg-grayscaledark-01">
      <div className="flex flex-col items-start gap-14 relative self-stretch w-full">
        <img
          className="w-full"
          alt="Logo"
          src="https://c.animaapp.com/mc99rq32MYYUAu/img/logo-2.svg"
        />

        <div className="flex flex-col gap-10 w-full">
          <div className="flex gap-20 px-16 py-0 w-full items-start">
            {/* Platform Column */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="font-md-dark font-[number:var(--md-dark-font-weight)] text-branddark-09 text-[length:var(--md-dark-font-size)] tracking-[var(--md-dark-letter-spacing)] leading-[var(--md-dark-line-height)] [font-style:var(--md-dark-font-style)]">
                Platform
              </h3>

              <div className="flex flex-col items-start gap-8">
                {/* Features Section */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="opacity-[0.54] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    Features
                  </p>

                  {platformFeatures.map((feature, index) => (
                    <div
                      key={`feature-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p
                        className={`opacity-[0.84] ${feature === "Moderation" ? "font-sm-medium font-[number:var(--sm-medium-font-weight)] text-[length:var(--sm-medium-font-size)] tracking-[var(--sm-medium-letter-spacing)] leading-[var(--sm-medium-line-height)]" : "font-sm-regular font-[number:var(--sm-regular-font-weight)] text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)]"} text-grayscaledark-12 [font-style:var(--sm-regular-font-style)]`}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Implementation Section */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="opacity-[0.54] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    Implementation
                  </p>

                  {platformImplementation.map((item, index) => (
                    <div
                      key={`implementation-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies Section */}
                <div className="flex flex-col items-start gap-4">
                  <p className="opacity-[0.54] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    Technologies
                  </p>

                  {platformTechnologies.map((tech, index) => (
                    <div
                      key={`tech-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                        {tech}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Column */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="font-md-dark font-[number:var(--md-dark-font-weight)] text-branddark-09 text-[length:var(--md-dark-font-size)] tracking-[var(--md-dark-letter-spacing)] leading-[var(--md-dark-line-height)] [font-style:var(--md-dark-font-style)]">
                Solutions
              </h3>

              <div className="flex flex-col w-[199px] items-start gap-8">
                {/* Use Cases Section */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="opacity-[0.54] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    By Use cases
                  </p>

                  {solutionsUseCases.map((useCase, index) => (
                    <div
                      key={`usecase-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p
                        className={`opacity-[0.84] ${useCase === "Virtual Events" ? "font-sm-medium font-[number:var(--sm-medium-font-weight)] text-[#f9f9ff] text-[length:var(--sm-medium-font-size)] tracking-[var(--sm-medium-letter-spacing)] leading-[var(--sm-medium-line-height)] [font-style:var(--sm-medium-font-style)]" : "font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]"}`}
                      >
                        {useCase}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Organization Types Section */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="opacity-[0.54] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    By Organization Type
                  </p>

                  {solutionsOrgTypes.map((orgType, index) => (
                    <div
                      key={`orgtype-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                        {orgType}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Developers Column */}
            <div className="flex flex-col items-start gap-[18px] flex-1">
              <h3 className="font-md-dark font-[number:var(--md-dark-font-weight)] text-branddark-09 text-[length:var(--md-dark-font-size)] tracking-[var(--md-dark-letter-spacing)] leading-[var(--md-dark-line-height)] [font-style:var(--md-dark-font-style)]">
                Developers
              </h3>

              <div className="flex flex-col items-start gap-8 w-full">
                {/* Technologies Documentation Section */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="opacity-[0.54] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    Technologies documentation
                  </p>

                  {developersTechnologies.map((tech, index) => (
                    <div
                      key={`dev-tech-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                        {tech}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Documentation Section */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="opacity-[0.54] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    Documentation
                  </p>

                  {developersDocumentation.map((doc, index) => (
                    <div
                      key={`doc-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                        {doc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources, Competitors, Company Column */}
            <div className="flex flex-col items-start gap-10 flex-1">
              {/* Resources Section */}
              <div className="flex flex-col w-[198.67px] items-start gap-[17px]">
                <h3 className="font-md-dark font-[number:var(--md-dark-font-weight)] text-branddark-09 text-[length:var(--md-dark-font-size)] tracking-[var(--md-dark-letter-spacing)] leading-[var(--md-dark-line-height)] [font-style:var(--md-dark-font-style)]">
                  Resources
                </h3>

                <div className="flex flex-col w-[199px] gap-4 mr-[-0.33px]">
                  {resources.map((resource, index) => (
                    <div
                      key={`resource-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                        {resource}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitors Section */}
              <div className="flex flex-col w-[198.67px] items-start gap-[18px]">
                <h3 className="font-md-dark font-[number:var(--md-dark-font-weight)] text-branddark-09 text-[length:var(--md-dark-font-size)] tracking-[var(--md-dark-letter-spacing)] leading-[var(--md-dark-line-height)] [font-style:var(--md-dark-font-style)]">
                  Competitors
                </h3>

                <div className="flex flex-col w-[199px] gap-4 mr-[-0.33px]">
                  {competitors.map((competitor, index) => (
                    <div
                      key={`competitor-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                        {competitor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Section */}
              <div className="flex flex-col w-[189.33px] items-start gap-[18px]">
                <h3 className="font-md-dark font-[number:var(--md-dark-font-weight)] text-branddark-09 text-[length:var(--md-dark-font-size)] tracking-[var(--md-dark-letter-spacing)] leading-[var(--md-dark-line-height)] [font-style:var(--md-dark-font-style)]">
                  Company
                </h3>

                <div className="flex flex-col gap-4 w-full">
                  {company.map((item, index) => (
                    <div
                      key={`company-${index}`}
                      className="flex items-start gap-2.5 w-full"
                    >
                      <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Separator
            className="w-full h-px"
            style={{
              backgroundImage:
                "url('https://c.animaapp.com/mc99rq32MYYUAu/img/divider.svg')",
            }}
          />

          <div className="flex items-center justify-between px-16 py-0 w-full">
            {/* Copyright and Legal */}
            <div className="flex items-start gap-6">
              <p className="opacity-[0.74] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                2023 © CometChat
              </p>

              <div className="flex gap-[22px]">
                <div className="flex items-start gap-2.5">
                  <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    Terms of Use
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    Privacy Policy
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-start gap-6">
              {socialMedia.map((social, index) => (
                <div
                  key={`social-${index}`}
                  className="flex items-center gap-1"
                >
                  <img
                    className="w-4 h-4"
                    alt={social.name}
                    src={social.icon}
                  />
                  <p className="opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] [font-style:var(--sm-regular-font-style)]">
                    {social.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
