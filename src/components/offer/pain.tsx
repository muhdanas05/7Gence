import Container from "@/components/global/container";
import Eyebrow from "@/components/offer/eyebrow";

const painPoints = [
    {
        label: "Hours lost chasing dead leads",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </svg>
        ),
    },
    {
        label: "Real buyers slip through the cracks",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.4" />
                <path d="M3 20c0-3.3 2.7-6 6-6 1.1 0 2.1.3 3 .8" />
                <path d="m16 14 5 5m0-5-5 5" />
            </svg>
        ),
    },
    {
        label: "No system to tell them apart",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M7 12h10" />
                <path d="M11 18h2" />
            </svg>
        ),
    },
];

const OfferPain = () => {
    return (
        <section className="relative flex flex-col items-center px-6 py-[100px] text-center">
            <Container>
                <div className="flex flex-col items-center">
                    <Eyebrow>The Problem</Eyebrow>
                    <h2
                        className="mt-[26px] max-w-[740px] text-balance text-[28px] sm:text-[34px] md:text-[42px] font-extrabold text-[#F0F1F4]"
                        style={{ fontFamily: "var(--font-manrope)", lineHeight: 1.12, letterSpacing: "-0.02em" }}
                    >
                        You&apos;re Either Drowning in Junk Leads — Or Starving for Real Ones.
                    </h2>
                    <p className="mt-[22px] max-w-[560px] text-[17px] leading-[1.65] text-[#8A8F98]">
                        Every hour spent calling unqualified contacts is an hour you didn&apos;t spend with someone ready to sign. With no system to separate the two, the real buyers quietly slip away while you chase ghosts.
                    </p>
                </div>
            </Container>

            <Container delay={0.15} className="mt-12 w-full max-w-[520px]">
                <div className="flex flex-col items-center gap-4">
                    {painPoints.map((point, index) => (
                        <div key={index} className="flex w-full max-w-[340px] items-center gap-4">
                            <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-xl border border-[#3B82F6]/20 bg-[#3B82F6]/[0.08] text-[#5B9BFF]">
                                {point.icon}
                            </span>
                            <span className="text-[16px] text-[#D4D7DD]">{point.label}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default OfferPain;
