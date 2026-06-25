import Container from "@/components/global/container";
import Eyebrow from "@/components/offer/eyebrow";

const steps = [
    {
        title: "Targeted Ads",
        description: "Campaigns built to attract real buyers and sellers in your market.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1" />
            </svg>
        ),
    },
    {
        title: "AI Qualification Layer",
        description: "Every lead is scored against your exact criteria — intent, budget, timeline — automatically.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <polygon points="21 4 3 4 10 12.5 10 19 14 21 14 12.5 21 4" />
            </svg>
        ),
    },
    {
        title: "Junk Filtering",
        description: "Tire-kickers and dead numbers are stripped out before they reach you.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M8 6V4h8v2" />
                <path d="M6 6v14h12V6" />
                <path d="m10 11 4 4m0-4-4 4" />
            </svg>
        ),
    },
    {
        title: "Sales-Qualified Delivery",
        description: "Ready-to-talk leads land in your CRM with instant alerts — primed to book and close.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="m8.5 12 2.5 2.5 4.5-5" />
            </svg>
        ),
    },
];

const OfferHowItWorks = () => {
    return (
        <section className="relative flex flex-col items-center px-6 py-[100px] text-center">
            <Container>
                <div className="flex flex-col items-center">
                    <Eyebrow>Inside The Closer Engine</Eyebrow>
                    <h2
                        className="mb-14 mt-[26px] text-[28px] sm:text-[34px] md:text-[42px] font-extrabold text-[#F0F1F4]"
                        style={{ fontFamily: "var(--font-manrope)", lineHeight: 1.12, letterSpacing: "-0.02em" }}
                    >
                        From Click to Closing in{" "}
                        <span className="font-subheading italic text-[30px] sm:text-[38px] md:text-[46px]" style={{ color: "#fff" }}>
                            4 Steps
                        </span>
                    </h2>
                </div>
            </Container>

            <div className="grid w-full max-w-[1120px] grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <Container key={step.title} delay={0.1 + index * 0.1}>
                        <div className="h-full rounded-[20px] border border-white/10 bg-black/40 p-[26px]">
                            <div className="mb-6 flex items-center justify-between">
                                <span
                                    className="text-[22px] font-extrabold text-white/35"
                                    style={{ fontFamily: "var(--font-manrope)" }}
                                >
                                    {index + 1}.
                                </span>
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3B82F6]/[0.28] bg-[#3B82F6]/[0.12] text-[#5B9BFF]">
                                    {step.icon}
                                </span>
                            </div>
                            <h3
                                className="mb-2 text-[18px] font-semibold text-[#F0F1F4]"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                {step.title}
                            </h3>
                            <p className="text-[14px] leading-[1.55] text-[#8A8F98]">
                                {step.description}
                            </p>
                        </div>
                    </Container>
                ))}
            </div>
        </section>
    );
};

export default OfferHowItWorks;
