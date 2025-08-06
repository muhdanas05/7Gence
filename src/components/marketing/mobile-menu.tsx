"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
<<<<<<< HEAD
import { Menu, Home, FileText, Calendar, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileMenu = () => {
    const pathname = usePathname();
    const isOnFormPage = pathname === "/form";
    const isOnAgencyPage = pathname === "/agency-developer-program";
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open mobile menu">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent 
                side="right" 
                className="w-full sm:w-[300px] pt-12 bg-background/95 backdrop-blur-sm"
                aria-describedby="mobile-menu-description"
            >
                <div id="mobile-menu-description" className="sr-only">
                    Mobile navigation menu with options to go home, access agency programs, or get started
                </div>
                <SheetHeader className="mb-12">
                    <SheetTitle className="text-left text-2xl font-bold text-foreground">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col">
                    {/* Action Buttons */}
                    <div className="space-y-6">
                        <Link href={isOnFormPage ? "/" : isOnAgencyPage ? "/" : "/form"} className="w-full" onClick={handleButtonClick}>
                            <Button 
                                className="w-full h-14 text-base font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
                                variant={isOnFormPage || isOnAgencyPage ? "default" : "outline"}
                            >
                                {isOnFormPage || isOnAgencyPage ? (
                                    <>
                                        <Home className="h-5 w-5 mr-3" />
                                        Home
                                    </>
                                ) : (
                                    <>
                                        <FileText className="h-5 w-5 mr-3" />
                                        Project Inquiry
                                    </>
                                )}
                            </Button>
                        </Link>
                        <div className="pt-1">
                            <Link href="/agency-developer-program" className="w-full" onClick={handleButtonClick}>
                                <Button 
                                    className="w-full h-14 text-base font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
                                    variant="outline"
                                >
                                    <Users className="h-5 w-5 mr-3" />
                                    Agency Program
                                </Button>
                            </Link>
                        </div>
                        <div className="pt-1">
                            <Link href="https://calendly.com/anas-7gence/discovery-call" className="w-full" onClick={handleButtonClick}>
                                <Button 
                                    className="w-full h-14 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
                                    variant="default"
                                >
                                    <Calendar className="h-5 w-5 mr-3" />
                                    Get Started
                                </Button>
                            </Link>
                        </div>
=======
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 mt-4 border-t border-border">
                        <Link href="#" className="w-full">
                            <Button className="w-full" variant="blue">
                                Get Started
                            </Button>
                        </Link>
>>>>>>> 11a90d6765be9d68ca38d00f753ff591c6cf0221
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenu
