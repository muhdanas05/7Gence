'use client';

const { motion } = require("framer-motion");
import React, { useState } from "react";
import Icons from "../global/icons";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const productDetails = [
  {
    title: "Churn Prevention Model",
    description: "Predicts high-risk patients, automates outreach & feedback, books visits.",
    icon: Icons.icon,
    overview: `Churn Prevention Model is an intelligent patient retention platform designed to reduce no-shows and prevent churn in healthcare clinics. Using predictive AI, it identifies high-risk patients and automatically starts a personalized outreach journey through calls, SMS, WhatsApp, and email. The system captures feedback, offers custom discounts, and even books appointments—all tracked in a centralized dashboard.\nIt also confirms upcoming appointments 24 hours prior, guiding patients on preparations via multi-channel touchpoints. With real-time analytics, risk scoring, and follow-up tracking, ChurnGuard AI empowers clinics to retain more patients, boost revenue, and improve operational efficiency effortlessly.`,
    keyPoints: [
      "Predictive AI for patient risk scoring",
      "Automated multi-channel outreach",
      "Real-time analytics & feedback tracking"
    ]
  },
  {
    title: "Reddit Marketing Agent",
    description: "Monitors subreddits, crafts personalized replies, engages meaningfully.",
    icon: Icons.circle1,
    overview: `The Reddit Marketing Agent automates smart, personalized outreach on Reddit. It begins by collecting your company’s context, then selects relevant subreddits to monitor. You define your target post types (e.g., complaints, questions), and it scrapes those subreddits, filtering posts that match your criteria. Next, it analyzes the commenter’s personality or sentiment, asks you for the desired tone and creativity, and finally generates personalized, engaging comments all simultaneously. This end-to-end pipeline helps you find high-intent users and interact meaningfully, turning Reddit threads into genuine marketing opportunities without spammy tactics. It's designed for precision, scalability, and human-like engagement at scale.`,
    keyPoints: [
      "Automated subreddit monitoring",
      "Sentiment & intent analysis",
      "Personalized, scalable engagement"
    ]
  }
];

const comingSoon = {
  title: "More Innovations Coming Soon",
  description: "Stay tuned for more cutting-edge AI tools from 7gence."
};

const CARD_HEIGHT_MOBILE = 600; // Taller for mobile to accommodate content
const CARD_HEIGHT_DESKTOP = 480; // Shorter for desktop since there's more space

const InHouseProducts = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="in-house-innovations" className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Our In-House Innovations
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4">
            Crafted with AI precision to solve real-world challenges
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8 w-full">
          {productDetails.map((product, i) => (
            <div
              key={product.title}
              className="[perspective:1200px] w-full h-full h-[680px] md:h-[480px]"
            >
              <motion.div
                className="relative w-full h-full h-[680px] md:h-[480px]"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.7, type: 'spring' }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
                  style={{ transform: 'rotateY(0deg)' }}
                >
                  <MagicCard
                    gradientFrom="#38bdf8"
                    gradientTo="#3b82f6"
                    gradientColor="rgba(59,130,246,0.1)"
                    className="p-4 lg:p-8 w-full h-full flex flex-col items-center overflow-hidden"
                  >
                    <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                    <div className="relative z-30 flex flex-col items-center w-full flex-grow justify-between h-full">
                      <div className="flex flex-col items-center w-full flex-grow justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                        >
                          {product.icon && React.createElement(product.icon, { className: "w-7 h-7" })}
                        </motion.div>
                        <h3 className="text-lg font-semibold mb-2 text-center mt-2">
                          {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-center mb-4 mt-1">
                          {product.description}
                        </p>
                        <ul className="flex flex-col gap-2 items-start mb-0 w-full max-w-xs mx-auto">
                          {product.keyPoints && product.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm font-medium text-accent-foreground/80">
                              <span className="inline-block w-2 h-2 rounded-full bg-accent-foreground/60"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-full flex flex-col items-center mt-8">
                        <button
                          className="mb-4 inline-flex items-center gap-1 text-blue-500 font-medium text-sm border border-blue-500 rounded px-4 py-2 relative overflow-hidden group"
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                          <span className="relative z-10">See Overview</span>
                          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0" />
                        </button>
                        <div className="w-2/3 h-px bg-border/60 mb-2" />
                        <span className="text-xs text-muted-foreground text-center opacity-80">Click to learn more about this product</span>
                      </div>
                    </div>
                  </MagicCard>
                </div>
                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <MagicCard
                    gradientFrom="#38bdf8"
                    gradientTo="#3b82f6"
                    gradientColor="rgba(59,130,246,0.1)"
                    className="p-4 lg:p-8 w-full h-full flex flex-col items-center justify-between overflow-hidden"
                  >
                    <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                    <div className="space-y-6 relative z-30 flex flex-col items-center h-full w-full overflow-y-auto justify-start py-8 px-2">
                      <h3 className="text-xl font-bold  text-center text-foreground">
                        {product.title} Overview
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: openIndex === i ? 1 : 0.2, y: openIndex === i ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: openIndex === i ? 0.2 : 0 }}
                        className="max-w-prose mx-auto text-base md:text-sm text-accent-foreground/90 text-center leading-relaxed mb-8"
                      >
                        {product.overview}
                      </motion.p>
                      <button
                        className="mt-4 mb-2 px-6 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow transition-colors border border-blue-500"
                        onClick={() => setOpenIndex(null)}
                      >
                        Back
                      </button>
                    </div>
                  </MagicCard>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-8 max-w-2xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-2">{comingSoon.title}</h3>
          <p className="text-sm text-muted-foreground">{comingSoon.description}</p>
        </div>
      </Container>
    </div>
  );
};

export default InHouseProducts;