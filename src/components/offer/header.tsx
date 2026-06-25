import Image from "next/image";
import Link from "next/link";

const OfferHeader = () => {
    return (
        <header className="relative z-20 mx-auto flex max-w-[1320px] items-center justify-between px-6 md:px-12 py-[30px]">
            <Link href="/" className="flex items-center gap-[14px]">
                <Image
                    src="/images/logof.png"
                    alt="7Gence Logo"
                    width={192}
                    height={192}
                    className="w-auto h-8"
                />
                <span
                    className="text-[21px] font-bold text-white"
                    style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.01em" }}
                >
                    7Gence
                </span>
            </Link>

            <Link
                href="https://calendly.com/anas-7gence/discovery-call"
                className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B9BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                style={{ fontFamily: "var(--font-manrope)" }}
            >
                Book a Call
            </Link>
        </header>
    )
};

export default OfferHeader
