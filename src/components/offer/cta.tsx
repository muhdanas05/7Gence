"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/global/container";

interface Star {
    top: number;
    left: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
}

const STAR_COUNT = 78;

const Starfield = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        setStars(
            Array.from({ length: STAR_COUNT }, () => ({
                top: Math.random() * 100,
                left: Math.random() * 100,
                size: Math.random() * 1.6 + 0.6,
                opacity: Math.random() * 0.5 + 0.15,
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 3,
            }))
        );
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 z-0">
            <style>{"@keyframes twk{0%,100%{opacity:.12}50%{opacity:.85}}"}</style>
            {stars.map((star, index) => (
                <span
                    key={index}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animation: `twk ${star.duration}s ease-in-out ${star.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
};

const OfferCTA = () => {
    return (
        <section className="relative flex flex-col items-center px-6 py-[60px] pb-[80px]">
            <Container className="w-full max-w-[1120px]">
                <div
                    className="relative flex flex-col items-center overflow-hidden px-10 py-24 text-center"
                    style={{
                        borderRadius: "32px",
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "radial-gradient(ellipse 70% 90% at 50% 120%, rgba(40,72,150,0.5), rgba(10,10,12,0.5) 65%)",
                    }}
                >
                    <Starfield />
                    <div className="relative z-10 flex flex-col items-center">
                        <h2
                            className="max-w-[760px] text-balance text-[30px] sm:text-[38px] md:text-[48px] font-extrabold text-white"
                            style={{ fontFamily: "var(--font-manrope)", lineHeight: 1.12, letterSpacing: "-0.025em" }}
                        >
                            You&apos;ve Seen the Offer.{" "}
                            <span className="font-subheading italic text-[32px] sm:text-[42px] md:text-[52px]" style={{ color: "#fff" }}>
                                Let&apos;s Fill Your Pipeline.
                            </span>
                        </h2>
                        <Link
                            href="https://calendly.com/anas-7gence/discovery-call"
                            className="mt-[38px] inline-flex items-center gap-[10px] rounded-full bg-white px-[30px] py-4 text-[16px] font-semibold text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B9BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                            style={{ fontFamily: "var(--font-manrope)" }}
                        >
                            Book Your Free Strategy Call
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m13 6 6 6-6 6" />
                            </svg>
                        </Link>
                        <p className="mt-5 text-[14px] text-[#8A8F98]">
                            No pitch deck. No pressure. We&apos;ll tell you honestly whether The Closer Engine is a fit.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OfferCTA;
