import Container from "@/components/global/container";

const OfferPromise = () => {
    return (
        <section className="relative flex flex-col items-center overflow-hidden px-6 py-[100px] text-center">
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/2"
                style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(45,80,160,0.28), rgba(10,10,12,0) 70%)" }}
            />
            <Container>
                <div className="relative z-10 flex flex-col items-center">
                    <span
                        className="font-extrabold text-[120px] sm:text-[160px] md:text-[188px] leading-[0.9]"
                        style={{
                            fontFamily: "var(--font-manrope)",
                            letterSpacing: "-0.04em",
                            backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #5B9BFF 50%, #3B82F6 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        30
                    </span>
                    <h2
                        className="mt-[18px] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold text-[#F0F1F4]"
                        style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.02em" }}
                    >
                        Qualified Leads in 45 Days
                    </h2>
                    <p className="mt-[18px] max-w-[480px] text-[17px] leading-[1.6] text-[#8A8F98]">
                        A concrete promise — not vague &quot;more leads.&quot; 30 sales-qualified conversations you can build your quarter around.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default OfferPromise;
