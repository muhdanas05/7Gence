"use client";

import { useState, useEffect, useCallback } from "react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";
import { Bot, Database, Phone, Mail, BarChart3, FileText, MessageSquare, Building2, ChevronLeft, ChevronRight, Search, Globe, Users } from "lucide-react";

const caseStudies = [
  // Database Reactivation Campaigns
  {
    category: "Database Reactivation",
    title: "Pet Industry Database Reactivation Campaign",
    description:
      "Built a comprehensive DBR infrastructure for a pet care company, featuring two synchronized voice agents (inbound and outbound) alongside a chatbot — all tightly integrated with their HubSpot CRM for seamless lead reactivation and follow-up automation.",
    icon: Database,
    color: "text-blue-500",
  },
  {
    category: "Database Reactivation",
    title: "Vacation Rental Management DBR",
    description:
      "Designed and deployed a robust database reactivation system for a short-term rental marketplace company, delivering property performance metrics, operational insights, and automated outreach to re-engage dormant property owners and guests.",
    icon: Building2,
    color: "text-cyan-500",
  },
  // Conversational AI & Customer Service
  {
    category: "Conversational AI",
    title: "AI-Powered Hotel Receptionist",
    description:
      "Built an intelligent virtual receptionist that handles guest inquiries, room availability checks, and booking interactions autonomously — ensuring 24/7 support and an elevated guest experience without human intervention.",
    icon: Bot,
    color: "text-pink-500",
  },
  // Real Estate Technology Solutions
  {
    category: "Real Estate Tech",
    title: "Property Listing Aggregation System",
    description:
      "Engineered an automated web scraping solution that collects real estate listings from multiple sources across the web and delivers structured, deduplicated data directly to a frontend interface for easy browsing and analysis.",
    icon: Globe,
    color: "text-green-500",
  },
  {
    category: "Real Estate Tech",
    title: "Intelligent Lead Management Platform",
    description:
      "Developed an end-to-end automation pipeline featuring custom property scrapers, dynamic outreach template generation, Instantly CRM integration, and smart lead routing based on engagement signals — turning raw data into qualified prospects.",
    icon: Users,
    color: "text-yellow-500",
  },
  {
    category: "Real Estate Tech",
    title: "Scoring & Qualification Engine",
    description:
      "Created a fully automated system that scrapes prospect data, applies multi-factor scoring algorithms, syncs with Airtable, and autonomously enrolls qualified leads into Instantly campaigns — including end-to-end booking automation for high-intent prospects.",
    icon: BarChart3,
    color: "text-indigo-500",
  },
  // Enterprise AI & Workflow Orchestration
  {
    category: "Enterprise AI",
    title: "Multi-Agent AI Orchestrator for Cold Email Operations",
    description:
      "Architected a large-scale AI orchestration platform that coordinates multiple specialized agents to handle complex email campaign workflows — including hyper-personalization at scale, campaign lifecycle management, and performance analytics.",
    icon: MessageSquare,
    color: "text-purple-500",
  },
  {
    category: "Enterprise AI",
    title: "RAG-Enhanced Art Advisor Chatbot",
    description:
      "Developed a Retrieval-Augmented Generation chatbot for an Italian art company, enabling intelligent, context-aware responses grounded in curated knowledge bases — demonstrating enterprise-grade AI capabilities in a creative industry context.",
    icon: Search,
    color: "text-orange-500",
  },
  {
    category: "Enterprise AI",
    title: "Autonomous Content Engine",
    description:
      "Built a comprehensive content automation platform that scrapes news, generates editorial content, manages publishing workflows, and distributes across X, Facebook, Instagram, and LinkedIn — with a Telegram bot for team-level editorial control.",
    icon: FileText,
    color: "text-teal-500",
  },
  {
    category: "Enterprise AI",
    title: "Lead Scraping & Enrichment System for Cold Email Agencies",
    description:
      "Created a fully automated lead generation system for a cold emailing agency that scrapes, enriches, and qualifies leads — then routes them directly into the correct client campaigns within their outreach platform, eliminating manual data handling.",
    icon: Database,
    color: "text-lime-500",
  },
  {
    category: "HR & Recruitment",
    title: "Job Collector & Decision-Maker Profiler for HR Teams",
    description:
      "Built a tool for an HR agency that automatically collects job postings from LinkedIn and Indeed (within publicly accessible areas), profiles key HR decision-makers associated with those listings, analyzes job descriptions for patterns, and organizes everything into a structured Google Sheet CRM.",
    icon: Building2,
    color: "text-green-500",
  },
  {
    category: "Outbound & Analytics",
    title: "White-Label Outbound Calling & Campaign Analysis System",
    description:
      "Developed a white-label calling platform capable of executing over 5,000 outbound calls per week. The system manages call execution, tracks outcomes, schedules follow-ups for missed or pending responses, runs detailed post-call AI analysis, and calculates campaign earnings and ROI.",
    icon: Phone,
    color: "text-blue-400",
  },
  {
    category: "Personalization",
    title: "Personalized Email Outreach for Returning Art Buyers",
    description:
      "Built a customer re-engagement solution for an art-selling platform that enriches historical buyer records and auto-generates personalized outreach emails tailored to each customer's purchase history and preferences — turning cold past buyers into warm returning clients.",
    icon: Mail,
    color: "text-rose-500",
  },
  {
    category: "Healthcare AI",
    title: "AI-Driven Health Report Automation",
    description:
      "Contributed the final integration layer to a patient health report automation system, using AI to interpret blood test data and store structured results in Cliniko. Completed and enhanced the final module to fully automate report generation, formatting, and secure patient documentation upload.",
    icon: FileText,
    color: "text-red-500",
  },
];

const AgencyCaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = caseStudies.length;

  const slides = [
    caseStudies[caseStudies.length - 1],
    ...caseStudies,
    caseStudies[0],
  ];

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setCurrentIndex(slides.length - 2);
    }
  };

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
  }, [isTransitioning, slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const handleTouchStart = () => { setIsPaused(true); };
  const handleTouchEnd = () => { setTimeout(() => setIsPaused(false), 1000); };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-12 px-4 md:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Case studies of our developers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-center text-accent-foreground/80 mt-4">
            <i>Note: These are not accomplishments of 7Gence — these are works built by our developers as freelance projects and agency collaborations.</i>
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-16">
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 border border-border/50 flex items-center justify-center hover:bg-background hover:scale-110 hover:shadow-lg transition-all duration-300 z-30 backdrop-blur-sm disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 border border-border/50 flex items-center justify-center hover:bg-background hover:scale-110 hover:shadow-lg transition-all duration-300 z-30 backdrop-blur-sm disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex"
              style={{
                transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' : 'none',
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((study, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="rounded-2xl bg-background/40 relative border border-border/50 transition-all duration-500 hover:shadow-2xl">
                    <MagicCard
                      gradientFrom="#a855f7"
                      gradientTo="#3b82f6"
                      gradientColor="rgba(168,85,247,0.1)"
                      className="p-6 md:p-8 lg:p-10 w-full overflow-hidden h-full transition-all duration-500"
                    >
                      {/* Floating background elements */}
                      <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full blur-lg animate-bounce"></div>
                      <div className="absolute bottom-0 right-0 bg-purple-500 w-1/4 h-1/4 blur-[8rem] z-20 animate-pulse"></div>
                      <div className="space-y-4 md:space-y-6 relative z-30">
                        {/* Category badge */}
                        <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground/60 border border-border/40 rounded-full px-3 py-1">
                          {study.category}
                        </span>
                        {/* Icon */}
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center ${study.color} transform-gpu animate-float`}>
                          <study.icon className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        {/* Title */}
                        <h3 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent leading-tight">
                          {study.title}
                        </h3>
                        {/* Description */}
                        <div className="text-sm text-muted-foreground leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                          {study.description}
                        </div>
                      </div>
                    </MagicCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 transform-gpu hover:scale-125 ${
                  index === ((currentIndex - 1 + totalSlides) % totalSlides)
                    ? 'bg-gradient-to-r from-sky-400 to-blue-600 scale-150 shadow-lg'
                    : 'bg-border hover:bg-border/70 hover:shadow-md'
                } disabled:opacity-50 disabled:pointer-events-none`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AgencyCaseStudies;