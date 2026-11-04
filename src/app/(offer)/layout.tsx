"use client";

import Footer from "@/components/marketing/footer";
import OfferHeader from "@/components/offer/header";
import { cn } from "@/lib";
import { manrope } from "./fonts";

interface Props {
    children: React.ReactNode;
};

const OfferLayout = ({ children }: Props) => {
    return (
        <div className={cn(manrope.variable, "isolate relative min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] font-base text-[#F4F5F7]")}>
            <OfferHeader />
            <main className="mx-auto w-full relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default OfferLayout
