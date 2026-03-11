"use client";

import { ArrowRightIcon, Users, Zap } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Particles from "../ui/particles";

const AgencyCTA = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container className="py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-6 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden mx-4 md:mx-0">
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#d4d4d4"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#d4d4d4"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)',
                        }}
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug max-w-4xl mx-auto px-2">
                        Ready to elevate your agency?
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4 px-2">
                        Unlock growth and efficiency with our Agency Developer Program—AI experts, automations, and white-label solutions for your clients.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full px-4 sm:px-0">
                        <Link href="/agency-developer-program/form" className="w-full sm:w-auto">
                            <Button variant="white" size="lg" className="w-full sm:w-auto">
                                Apply Now
                            </Button>
                        </Link>
                        <Link href="https://calendly.com/anas-7gence/discovery-call" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default AgencyCTA 