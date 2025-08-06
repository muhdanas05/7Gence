import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import InHouseProducts from "@/components/marketing/in-house-products";


const HomePage = () => {
    return (
        <Wrapper className="relative">
            <Hero />
            <Features />
            <InHouseProducts />
            <Analysis />
            <Integration />
            <CTA />
        </Wrapper>
    )
};

export default HomePage
