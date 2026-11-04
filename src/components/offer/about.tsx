import Container from "@/components/global/container";
import Eyebrow from "@/components/offer/eyebrow";

const badges = ["2 Years Experience", "AI + Performance Marketing", "India & UAE"];

const OfferAbout = () => {
    return (
        <section className="relative flex flex-col items-center px-6 py-[100px] text-center">
            <Container>
                <div className="flex flex-col items-center">
                    <Eyebrow>Who We Are</Eyebrow>
                    <h2
                        className="mt-6 text-[30px] sm:text-[36px] md:text-[40px] font-extrabold text-[#F0F1F4]"
                        style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.02em" }}
                    >
                        7Gence
                    </h2>
                    <div className="mt-5 flex flex-wrap justify-center gap-3">
                        {badges.map((badge) => (
                            <span
                                key={badge}
                                className="rounded-full border border-white/[0.12] px-[18px] py-[9px] text-[13px] font-medium text-[#C9CCD2]"
                                style={{ fontFamily: "var(--font-manrope)" }}
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                    <p className="mt-[30px] max-w-[620px] text-[18px] leading-[1.65] text-[#8A8F98]">
                        7Gence is an AI automation agency. We pair performance marketing with intelligent qualification systems to do one thing: fill your pipeline with people who actually want to buy or sell.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default OfferAbout;
