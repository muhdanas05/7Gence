"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import { TrendingUp, Mail, BarChart3, Inbox, ArrowRight } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    tag: "SEO & Content",
    title: "Semantic SEO Blog Generator",
    description:
      "Built a semantic SEO content generation system that produced topically authoritative, cluster-structured blog content at scale. Rather than publishing generic posts, the system built semantic topic maps and generated content that ranked for entire subject areas, not just individual keywords. Within the first month of deployment, the client recorded up to a 10% increase in sales alongside a significant uplift in organic search traffic volume.",
    metric: "↑ 10% sales in month one",
    metricColor: "text-emerald-400",
    logo: {
      type: "image" as const,
      src: "/images/jurassic-light-logo.png",
      alt: "Jurassic Light",
      width: 110,
      height: 40,
      // Light cream background logo — invert to make dark bg, then screen to strip it
      style: { filter: "invert(1) contrast(1.2)", mixBlendMode: "screen" as const },
    },
  },
  {
    icon: BarChart3,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    tag: "Social Intelligence",
    title: "Trend Radar System",
    description:
      "Built an automated Trend Radar platform that monitors competitors' Instagram and TikTok accounts around the clock, detecting emerging content trends before they hit the mainstream. The system analyzes posting dynamics, view growth velocity, engagement metrics, and recurring content formats, flagging videos with abnormal growth patterns while still in early formation. When a trend is detected, the client receives a full analytical report with video link, engagement metrics, growth trajectory, and a scaling potential score. The result: an average of 30-40 trend-based short-form content ideas generated per day.",
    metric: "30–40 trend ideas generated daily",
    metricColor: "text-purple-400",
    logo: {
      type: "image" as const,
      src: "/images/frambini-logo.png",
      alt: "Frambini",
      width: 100,
      height: 36,
      // Show original pink colors — contained in a rounded pill
      style: { filter: "none", mixBlendMode: "normal" as const },
      pill: true,
    },
  },
  {
    icon: Mail,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10",
    tag: "Cold Email Outreach",
    title: "Cold Email Outreach Infrastructure",
    description:
      "Built and operated targeted cold email outreach campaigns for two clients with distinct audiences. For PointFive, we ran outreach directed at creative agencies, positioning their services as a development partner for agency teams that needed to scale delivery. For Blueprint Labs, we targeted the events industry, connecting them with event companies actively in need of development support. Both campaigns used enriched, intent-based lead lists with personalized messaging sequences, resulting in a consistent pipeline of highly qualified inbound conversations.",
    metric: "Highly qualified leads generated",
    metricColor: "text-sky-400",
    logo: {
      type: "image" as const,
      src: "/images/pointfive-logo.png",
      alt: "PointFive",
      width: 80,
      height: 36,
      // Dark bg logo — show in a dark pill so the bg is intentional
      style: { filter: "none", mixBlendMode: "normal" as const },
      pill: true,
    },
  },
  {
    icon: Inbox,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    tag: "E-Commerce AI",
    title: "Shopify Agentic Chatbot",
    description:
      "Built a fully agentic AI chatbot for a luxury fashion brand's Shopify store. The assistant handles customer queries and FAQs, checks live order status by order number, recommends products contextually, and presents interactive carousels directly inside the chat for browsing and selection. Customers receive instant purchase links without leaving the conversation. Powered by agentic AI, the chatbot autonomously reasons through requests and executes multi-step workflows — eliminating the need for manual support intervention. Up to 40% time saved on operations, with average query resolution time falling from hours to under 10 seconds.",
    metric: "Up to 40% time saved on operations",
    metricColor: "text-amber-400",
    logo: {
      type: "image" as const,
      src: "/images/mlbag-logo.png",
      alt: "Marie Louis Bags",
      width: 110,
      height: 36,
      style: { objectFit: "contain" as const },
    },
  },
];


// All 5 clients for the marquee — 3 with logos, 2 as styled text
const clientLogos = [
  {
    key: "pointfive",
    type: "image" as const,
    src: "/images/pointfive-logo.png",
    alt: "PointFive",
    width: 90,
    height: 38,
    // Dark bg logo in a pill so the dark bg is on-brand
    style: { filter: "none", mixBlendMode: "normal" as const },
    pill: true,
  },
  {
    key: "frambini",
    type: "image" as const,
    src: "/images/frambini-logo.png",
    alt: "Frambini",
    width: 100,
    height: 38,
    // Original pink colors, shown in a rounded pill
    style: { filter: "none", mixBlendMode: "normal" as const },
    pill: true,
  },
  {
    key: "jurassic",
    type: "image" as const,
    src: "/images/jurassic-light-logo.png",
    alt: "Jurassic Light",
    width: 120,
    height: 44,
    style: { filter: "invert(1) contrast(1.2)", mixBlendMode: "screen" as const },
  },
  {
    key: "mlbag",
    type: "image" as const,
    src: "/images/mlbag-logo.png",
    alt: "Marie Louis Bags",
    width: 110,
    height: 36,
    style: { objectFit: "contain" as const },
  },
  {
    key: "blueprint",
    type: "text" as const,
    render: (
      <span className="text-base font-medium tracking-wide text-muted-foreground/80 select-none">
        Blueprint Labs
      </span>
    ),
  },
];

const doubled = [...clientLogos, ...clientLogos];

const Results = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 md:mb-16 px-4 md:px-0">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground/50 border border-border/40 rounded-full px-4 py-1.5 mb-4">
            Monetary Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Real outcomes for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              real businesses
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4">
            A look at the measurable impact our developers have delivered across industries.
          </p>
        </div>

        {/* 4 result cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 md:px-0">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-6 md:p-8 hover:border-border hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col gap-5 h-full">
                {/* Top row: icon + tag + logo */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${result.iconBg} flex items-center justify-center shrink-0`}>
                      <result.icon className={`w-5 h-5 ${result.iconColor}`} />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                      {result.tag}
                    </span>
                  </div>

                  {/* Logo area */}
                  <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end max-w-[200px]">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="rounded-lg overflow-hidden flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ width: result.logo.width, height: result.logo.height }}
                        >
                          <Image
                            src={result.logo.src}
                            alt={result.logo.alt}
                            width={result.logo.width}
                            height={result.logo.height}
                            className="object-cover w-full h-full"
                            style={result.logo.style}
                            unoptimized
                          />
                        </div>
                      </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                  {result.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {result.description}
                </p>

                {/* Metric */}
                <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                  <span className={`text-sm font-semibold ${result.metricColor}`}>
                    {result.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <p className="text-xs text-muted-foreground/40 uppercase tracking-widest">or if you&apos;re curious</p>
          <Link
            href="/agency-developer-program"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 border border-border/50 hover:border-border rounded-full px-6 py-3 bg-background/40 hover:bg-background/80 backdrop-blur-sm"
          >
            Read some of our agency case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </Container>

      {/* Client logo marquee */}
      <div className="relative w-full mt-20 overflow-hidden">
        {/* Section label */}
        <div className="flex justify-center mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/40 font-medium">
            Clients we've worked with
          </p>
        </div>

        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
        />

        {/* Marquee track */}
        <div className="flex w-full overflow-hidden">
          <div
            className="flex items-center gap-16 animate-results-marquee hover:[animation-play-state:paused] shrink-0 w-max"
            style={{ willChange: "transform", whiteSpace: "nowrap" }}
          >
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 shrink-0 px-4 h-14"
              >
                {client.type === "image" ? (
                  <div
                    className="rounded-lg overflow-hidden flex-shrink-0"
                    style={{ width: client.width, height: client.height }}
                  >
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={client.width}
                      height={client.height}
                      className="object-cover w-full h-full"
                      style={client.style}
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="flex items-center h-full">
                    {'render' in client && client.render}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes results-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-results-marquee {
          animation: results-marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Results;
