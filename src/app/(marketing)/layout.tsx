<<<<<<< HEAD
"use client";

import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import React, { useRef, useEffect, useState } from 'react';
=======
import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import React from 'react';
>>>>>>> 11a90d6765be9d68ca38d00f753ff591c6cf0221

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
<<<<<<< HEAD
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

    // Clone children and inject ctaRef into CTA
    const childrenWithRef = React.Children.map(children, child => {
        if (
            React.isValidElement(child) &&
            child.type &&
            (child.type as any).name === "Wrapper"
        ) {
            // Look for CTA inside Wrapper
            return React.cloneElement(child, {
                ctaRef
            });
        }
        return child;
    });

    return (
        <>
            {!hideNavbar && <Navbar />}
            <main className="mx-auto w-full z-40 relative">
                {childrenWithRef}
=======
    return (
        <>
            <Navbar />
            <main className="mx-auto w-full z-40 relative">
                {children}
>>>>>>> 11a90d6765be9d68ca38d00f753ff591c6cf0221
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout
