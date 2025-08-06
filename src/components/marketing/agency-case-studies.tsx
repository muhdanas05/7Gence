"use client";

import { useState, useEffect, useCallback } from "react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";
import { Bot, Database, Phone, Mail, BarChart3, FileText, MessageSquare, Building2, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    title: "Automated Job Discovery and CRM Integration",
    description:
      "Developed an automated system that collects publicly available job postings from LinkedIn, analyzes and classifies each post into a defined set of job-related metrics (like role type, level, domain, etc.), then conducts contextual research from permitted online sources to enrich the data. The processed information is then stored in a structured Google Sheet, functioning as a lightweight CRM for easier tracking and engagement.",
    icon: Database,
    color: "text-blue-500"
  },
  {
    title: "Public Job Collector and Decision-Maker Profiler for HR Teams",
    description:
      "Created a tool for an HR agency to automatically gather job postings from LinkedIn and Indeed (within publicly accessible areas), then conduct background research on HR personnel and other decision-makers associated with those listings. The job descriptions are also analyzed for key patterns and insights, then organized into a CRM (Google Sheet) for internal team use.",
    icon: Building2,
    color: "text-green-500"
  },
  {
    title: "White-Label Outbound Calling and Campaign Analysis System",
    description:
      "Developed a white-label solution capable of managing and executing over 5000 outbound calls per week. The system handles call execution, tracks call outcomes, schedules follow-ups for missed or pending responses, and performs detailed post-call analysis. It also calculates earnings and campaign results using AI-driven data processing tools.",
    icon: Phone,
    color: "text-purple-500"
  },
  {
    title: "Personalized Email Outreach for Returning Art Buyers",
    description:
      "Created a solution to enrich past customer data for an art-selling platform. The system analyzed previous buyer records and automatically generated personalized email messages tailored to each customer's purchase history and preferences. This allowed the client to re-engage past buyers through relevant and respectful communication.",
    icon: Mail,
    color: "text-orange-500"
  },
  {
    title: "AI-Enhanced Post-Call Analytics Dashboard",
    description:
      "Built a dashboard and backend system that processes post-call recordings using AI to extract key insights. The system evaluates call quality, identifies important discussion points, suggests improvements, and compares performance between AI-generated calls and human agent calls, enabling continuous optimization for outreach campaigns.",
    icon: BarChart3,
    color: "text-indigo-500"
  },
  {
    title: "AI-Driven Health Report Automation",
    description:
      "We contributed to the final integration of a patient health report automation system that uses AI to interpret blood test data and store it in Cliniko. While the core system was originally developed by another party, we enhanced and completed the final module to automate report generation, formatting, and upload ensuring smooth delivery from AI insights to final patient documentation.",
    icon: FileText,
    color: "text-red-500"
  },
  // Ongoing projects
  {
    title: "Ongoing: Conversational Flow Voice AI System with Booking & Human Handoff",
    description:
      "We're developing an advanced voice AI system that handles natural conversations, manages appointment bookings, sends SMS notifications, updates Slack channels, and includes seamless human handoff when needed. This builds upon the previously delivered dashboard (see Case Study #5) and expands into real-time communication automation.",
    icon: MessageSquare,
    color: "text-teal-500"
  },
  {
    title: "Ongoing: AI Receptionist for Hotel Booking & Availability",
    description:
      "Currently building a conversational AI receptionist for a hotel that can respond to guest inquiries, check room availability, and handle bookings with their own custom API ensuring 24/7 automated support and improved customer experience. *Note: This project is not freelance but part of our founder's second startup.",
    icon: Bot,
    color: "text-pink-500"
  },
];

const AgencyCaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of prepended clone
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = caseStudies.length;

  // Prepare slides with clones for infinite loop
  const slides = [
    caseStudies[caseStudies.length - 1], // Clone of last
    ...caseStudies,
    caseStudies[0], // Clone of first
  ];

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === slides.length - 1) {
      // If at the clone of the first slide, jump to real first
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // If at the clone of the last slide, jump to real last
      setCurrentIndex(slides.length - 2);
    }
  };

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // Offset for clone
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

  // Auto-advance carousel with enhanced timing
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  // Add touch event handling for mobile
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Resume auto-advance after a short delay on mobile
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Case studies of our developers
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4">
            <i>Note: 
            These are not the accomplishments of 7Gence, these are the works that our developers have build as freelance projects and for other agencies.
            </i>
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
                        {/* Icon with floating animation */}
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center ${study.color} transform-gpu animate-float`}>
                          <study.icon className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        {/* Title with gradient text effect */}
                        <h3 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent leading-tight">
                          {study.title}
                        </h3>
                        {/* Description with enhanced typography */}
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
          {/* Enhanced Dots Indicator */}
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