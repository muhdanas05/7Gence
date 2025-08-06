"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const isOnFormPage = pathname === "/form";
    const isOnAgencyDevPage = pathname === "/agency-developer-program";

    // Scroll direction state
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > lastScrollY && currentScrollY > 40) {
                        setShowNavbar(false); // Scrolling down
                    } else {
                        setShowNavbar(true); // Scrolling up
                    }
                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-0">
                        <Link href="/" className="flex items-center gap-4">
                            <img 
                                src="/images/logof.png"
                                alt="7Gence Logo"
                                className="h-12 w-auto filter  "
                            />
                            <span className="text-xl font-semibold hidden lg:block">
                                7Gence
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href={isOnFormPage || isOnAgencyDevPage ? "/" : "/form"} className="hidden lg:block">
                            <Button variant="outline">
                                {isOnFormPage || isOnAgencyDevPage ? "Home" : "Project Inquiry"}
                            </Button>
                        </Link>
                        <Link href="/agency-developer-program" className="hidden lg:block">
                            <Button variant="outline">
                                Agency Program
                            </Button>
                        </Link>
                        <Link href="https://calendly.com/anas-7gence/discovery-call" className="hidden lg:block">
                            <Button variant="default">
                                Get Started
                            </Button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
