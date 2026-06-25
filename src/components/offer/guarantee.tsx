import Container from "@/components/global/container";

const terms = [
    {
        strong: "Qualified means qualified.",
        rest: " Every lead matches your buying or selling criteria, is reachable, and is ready to have the conversation.",
    },
    {
        strong: "You see every lead.",
        rest: " Delivery is tracked in the open — no vague reporting, no padded numbers.",
    },
    {
        strong: "Miss the target, keep working.",
        rest: " If we fall short of 30 in 45 days, you don’t pay for another day until we get there.",
    },
];

const OfferGuarantee = () => {
    return (
        <section className="relative flex flex-col items-center px-6 py-[60px] pb-[80px]">
            <Container className="w-full max-w-[980px]">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0D12]">
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(91,155,255,0.6), transparent)" }}
                    />
                    <div
                        className="pointer-events-none absolute -left-[120px] -top-[120px] h-[380px] w-[380px] rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.16), transparent 70%)" }}
                    />

                    <div className="relative grid gap-y-10 md:grid-cols-[0.95fr_1.05fr]">
                        {/* The promise */}
                        <div className="flex flex-col justify-center border-white/10 p-9 md:border-r md:p-11">
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/[0.12] text-[#7FB0FF]">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </span>
                                <span
                                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7FB0FF]"
                                    style={{ fontFamily: "var(--font-manrope)" }}
                                >
                                    Risk-Free Guarantee
                                </span>
                            </div>

                            <h2
                                className="mt-7 text-[24px] sm:text-[27px] md:text-[30px] font-extrabold leading-[1.18] text-white"
                                style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.02em" }}
                            >
                                <span className="text-[#5B9BFF]">30 qualified leads</span> in{" "}
                                <span className="text-[#5B9BFF]">45 days</span> — or we work for free until we hit it.
                            </h2>
                        </div>

                        {/* The terms */}
                        <div className="flex flex-col justify-center gap-6 p-9 md:p-11">
                            <p
                                className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8A8F98]"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                No fine print. Here&apos;s the deal:
                            </p>
                            <ul className="flex flex-col gap-5">
                                {terms.map((term) => (
                                    <li key={term.strong} className="flex gap-3.5">
                                        <span className="mt-[3px] flex h-[22px] w-[22px] flex-none items-center justify-center rounded-md border border-[#3B82F6]/25 bg-[#3B82F6]/[0.1] text-[#5B9BFF]">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                                                <path d="m5 12.5 4.5 4.5L19 7" />
                                            </svg>
                                        </span>
                                        <p className="text-[15px] leading-[1.55] text-[#9DA3AD]">
                                            <span className="font-semibold text-[#E4E7EC]">{term.strong}</span>
                                            {term.rest}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OfferGuarantee;
