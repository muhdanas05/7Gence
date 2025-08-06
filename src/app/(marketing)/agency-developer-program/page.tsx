import Wrapper from "@/components/global/wrapper";
import AgencyHero from "@/components/marketing/agency-hero";
import AgencyOverview from "@/components/marketing/agency-overview";
import AgencyCaseStudies from "@/components/marketing/agency-case-studies";
import AgencyAutomations from "@/components/marketing/agency-automations";
import AgencyHowItWorks from "@/components/marketing/agency-how-it-works";
import AgencyCTA from "@/components/marketing/agency-cta";

const AgencyDeveloperProgramPage = () => {
    return (
        <Wrapper className="relative">
            <AgencyHero />
            <AgencyOverview />
            <AgencyCaseStudies />
            {/* <AgencyAutomations /> */}
            <AgencyHowItWorks />
            <AgencyCTA />
        </Wrapper>
    )
};

export default AgencyDeveloperProgramPage 