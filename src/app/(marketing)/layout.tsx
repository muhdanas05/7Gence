"use client";

import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import React, { useRef, useEffect, useState } from 'react';

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    const [hideNavbar, setHideNavbar] = useState(false);
    const ctaRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!ctaRef.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setHideNavbar(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );
        observer.observe(ctaRef.current);
        return () => observer.disconnect();
    }, [ctaRef]);

    // Clone children and inject ctaRef into Wrapper only
    const childrenWithRef = React.Children.map(children, child => {
        if (
            React.isValidElement(child) &&
            child.type &&
            (child.type as any).name === "Wrapper"
        ) {
            return React.cloneElement(child, {
                ctaRef: ctaRef
            } as any);
        }
        return child;
    });

    return (
        <>
            {!hideNavbar && <Navbar />}
            <main className="mx-auto w-full z-40 relative">
                {childrenWithRef}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout
