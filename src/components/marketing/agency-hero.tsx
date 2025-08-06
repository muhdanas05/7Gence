"use client";

import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";

const AgencyHero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-12 md:py-20">
            <Container className="py-12 md:py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                    <div className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)',
                        }}
                    />
                    
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-tight max-w-4xl mx-auto px-2">
                        Partner with 7Gence: Development & Growth for AI Agencies
                    </h1>
                    <p className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4 md:mt-6 px-4">
                        Our experts become your experts—no new hires required.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8 w-full px-4">
                        <Link href="/agency-developer-program/form" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto flex items-center gap-2">
                                Apply Now
                                <ArrowRightIcon className="size-4" />
                            </Button>
                        </Link>
                        <Link href="/documents/PROGRAM BROCHURE.pdf" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                                <DownloadIcon className="size-4" />
                                <span className="hidden sm:inline">Download Program Brochure</span>
                                <span className="sm:hidden">Download Brochure</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default AgencyHero 