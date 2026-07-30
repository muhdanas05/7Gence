import OfferAbout from "@/components/offer/about";
import OfferCTA from "@/components/offer/cta";
import OfferGuarantee from "@/components/offer/guarantee";
import OfferHero from "@/components/offer/hero";
import OfferHowItWorks from "@/components/offer/how-it-works";
import OfferPain from "@/components/offer/pain";
import OfferPromise from "@/components/offer/offer";
import OfferSolution from "@/components/offer/solution";
import { generateMetadata } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...generateMetadata({
        title: "30 Qualified Real Estate Leads in 45 Days | 7Gence",
        description: "7Gence runs targeted ads and a qualification layer for real estate agents and brokers in India & UAE — so you only talk to buyers and sellers who are ready to move.",
    }),
    robots: { index: false, follow: false },
};

const RealEstateOfferPage = () => {
    return (
        <div className="relative w-full">
            <OfferHero />
            <OfferPain />
            <OfferSolution />
            <OfferHowItWorks />
            <OfferPromise />
            <OfferGuarantee />
            <OfferAbout />
            <OfferCTA />
        </div>
    )
};

export default RealEstateOfferPage
