"use client";

import Image from "next/image";
import Container from "../global/container";

type LogoItem =
  | {
      type: "image";
      name: string;
      src: string;
      filter?: string;
      mixBlendMode?: "screen" | "normal";
      width: number;
      height: number;
    }
  | {
      type: "text";
      name: string;
      render: React.ReactNode;
    };

const agencies: LogoItem[] = [
  {
    type: "image",
    name: "StratusBridge",
    src: "https://stratusbridge.ai/assets/logo.svg",
    filter: "brightness(0) invert(1)",
    width: 160,
    height: 48,
  },
  {
    type: "image",
    name: "Callbutler AI",
    src: "https://callbutlerai.website/wp-content/uploads/2025/07/CallButler.Ai__6_-removebg-preview.png",
    filter: "brightness(0) invert(1)",
    width: 160,
    height: 48,
  },
  {
    type: "image",
    name: "AI Fulfilment Org",
    src: "https://framerusercontent.com/images/QyTcySTd87xvkL8MHKlZ7Ml1oU.png",
    filter: "brightness(1.4) contrast(1.1)",
    mixBlendMode: "screen",
    width: 60,
    height: 60,
  },
  {
    type: "image",
    name: "Fraima",
    src: "/images/fraima-logo.png",
    filter: "invert(1) brightness(2)",
    mixBlendMode: "screen",
    width: 130,
    height: 44,
  },
  {
    type: "image",
    name: "Icarus Marketing",
    src: "https://icarusmarketing.nl/wp-content/uploads/2023/06/Logo-3.0-transparant.webp",
    filter: "brightness(0) invert(1)",
    width: 160,
    height: 48,
  },
  {
    type: "image",
    name: "Bochica Networks",
    src: "https://cdn.wegic.ai/assets/onepage/thread/icon/e110f5a0-3449-447f-bc3a-c56de3ab17c1.png?format=webp",
    filter: "brightness(1.6) contrast(1.1)",
    mixBlendMode: "screen",
    width: 60,
    height: 60,
  },
  {
    type: "text",
    name: "Cognaite",
    render: (
      <span className="flex items-center gap-1.5 select-none">
        <span className="font-mono text-white/70 text-sm font-semibold tracking-tight">&lt;/&gt;</span>
        <span
          className="text-base font-bold tracking-tight"
          style={{ color: "rgba(255,255,255,0.80)", fontFamily: "inherit" }}
        >
          Cogna<span style={{ color: "#e53e3e" }}>ite</span>
        </span>
      </span>
    ),
  },
  {
    type: "text",
    name: "Verbalise",
    render: (
      <span className="flex items-center gap-1 select-none">
        <span
          className="text-base font-bold tracking-tight"
          style={{ color: "rgba(255,255,255,0.85)", fontFamily: "inherit" }}
        >
          Verbalise
        </span>
        <span
          className="text-base font-bold"
          style={{ color: "#4a90d9", letterSpacing: "-2px" }}
        >
          &#171;&#171;
        </span>
      </span>
    ),
  },
];

const AgencyLogosMarquee = () => {
  const doubled = [...agencies, ...agencies]; // duplicate for seamless loop

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-16 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 font-medium mb-2">
            Agency Collaborations
          </p>
          <h2 className="text-xl md:text-2xl font-heading font-medium text-foreground/80">
            Trusted by agencies across the globe
          </h2>
        </div>
      </Container>

      {/* Fade edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />

      {/* Marquee strip */}
      <div className="flex w-full overflow-hidden">
        <div
          className="flex items-center gap-16 animate-marquee hover:[animation-play-state:paused] shrink-0 w-max"
          style={{ willChange: "transform", whiteSpace: "nowrap" }}
        >
          {doubled.map((agency, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0 px-4"
            >
              {agency.type === "text" ? (
                <div className="flex items-center h-12">{agency.render}</div>
              ) : (
                <Image
                  src={agency.src}
                  alt={agency.name}
                  width={agency.width}
                  height={agency.height}
                  className="object-contain"
                  style={{
                    filter: agency.filter,
                    mixBlendMode: agency.mixBlendMode ?? "normal",
                    width: agency.width,
                    height: agency.height,
                  }}
                  unoptimized
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AgencyLogosMarquee;
