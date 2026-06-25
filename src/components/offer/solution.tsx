import Container from "@/components/global/container";
import Eyebrow from "@/components/offer/eyebrow";

const niches = ["Buyers", "Sellers", "Off-Plan", "Luxury", "Rentals"];

const filteredOut = [
    "Tire-kickers just browsing",
    "Wrong budget range",
    "Dead or wrong numbers",
    "Not buying for months",
];

const reachesYou = [
    "Verified buying intent",
    "Budget confirmed upfront",
    "Reachable & responsive",
    "Ready to move now",
];

const CrossIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 6 12 12M18 6 6 18" />
    </svg>
);

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
);

const OfferSolution = () => {
    return (
        <section className="relative flex flex-col items-center px-6 py-[100px] text-center">
            <Container>
                <div className="flex flex-col items-center">
                    <Eyebrow>The Closer Engine</Eyebrow>
                    <h2
                        className="mt-[26px] max-w-[760px] text-balance text-[28px] sm:text-[34px] md:text-[42px] font-extrabold text-[#F0F1F4]"
                        style={{ fontFamily: "var(--font-manrope)", lineHeight: 1.12, letterSpacing: "-0.02em" }}
                    >
                        We Filter Out the Noise. You Only Talk to People Ready to Move.
                    </h2>
                    <p className="mt-[22px] max-w-[580px] text-[17px] leading-[1.65] text-[#8A8F98]">
                        The Closer Engine runs your ads and screens every lead — an AI qualification layer checks intent, budget, and timing — so only sales-ready buyers and sellers ever reach you.
                    </p>
                </div>
            </Container>

            <Container delay={0.15} className="mt-14 w-full max-w-[860px]">
                <div className="grid items-stretch gap-4 text-left md:grid-cols-[1fr_auto_1fr]">
                    <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.015] p-7">
                        <div className="mb-5 flex items-center gap-2.5">
                            <span className="h-2 w-2 rounded-full bg-[#6B7280]" />
                            <span
                                className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7C828C]"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                We filter out
                            </span>
                        </div>
                        <ul className="flex flex-col gap-3.5">
                            {filteredOut.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-lg bg-white/[0.04] text-[#8A8F98]">
                                        <CrossIcon />
                                    </span>
                                    <span className="text-[15px] text-[#85898F] line-through decoration-white/15">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden items-center justify-center md:flex">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/[0.08] text-[#5B9BFF]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14m-6-6 6 6-6 6" />
                            </svg>
                        </span>
                    </div>

                    <div className="rounded-[20px] border border-[#3B82F6]/25 bg-[#3B82F6]/[0.05] p-7">
                        <div className="mb-5 flex items-center gap-2.5">
                            <span className="h-2 w-2 rounded-full bg-[#5B9BFF]" />
                            <span
                                className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8FB6F5]"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                Reaches you
                            </span>
                        </div>
                        <ul className="flex flex-col gap-3.5">
                            {reachesYou.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-lg border border-[#3B82F6]/25 bg-[#3B82F6]/[0.12] text-[#5B9BFF]">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-[15px] font-medium text-[#E4E7EC]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>

            <Container delay={0.25} className="mt-10">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <span className="text-[13px] text-[#8A8F98]">Across</span>
                    {niches.map((niche) => (
                        <span
                            key={niche}
                            className="rounded-full border border-white/[0.12] px-[18px] py-[8px] text-[13px] font-medium text-[#C9CCD2]"
                            style={{ fontFamily: "var(--font-manrope)" }}
                        >
                            {niche}
                        </span>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default OfferSolution;
