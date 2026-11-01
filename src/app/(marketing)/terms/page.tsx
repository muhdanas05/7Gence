import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { BUSINESS, BUSINESS_ADDRESS_ONE_LINE } from "@/constants/business";
import { generateMetadata } from "@/utils";
import { MessageSquareIcon } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
    title: "Terms of Service",
    description: "Terms of service and SMS messaging terms for 7Gence LLC.",
});

const LAST_UPDATED = "November 1, 2026";

const linkClass = "text-foreground hover:text-primary underline underline-offset-4 transition-colors";

// local to this page, same as the privacy policy: legal copy is content, not a reusable pattern
const Section = ({ number, title, icon: Icon, id, children }: {
    number: number;
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
    id?: string;
    children: React.ReactNode;
}) => (
    <Container delay={0.1}>
        <section className="scroll-mt-24" id={id ?? `section-${number}`}>
            <h2 className="text-xl md:text-2xl font-heading font-medium !leading-snug flex items-baseline gap-3">
                <span className="text-primary/40 text-base md:text-lg tabular-nums">{number}.</span>
                <span className="flex items-center gap-2.5">
                    {Icon && <Icon className="size-5 text-primary shrink-0" />}
                    {title}
                </span>
            </h2>
            <div className="mt-4 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {children}
            </div>
        </section>
    </Container>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
    <ul className="space-y-2">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
                <span className="text-primary mt-1.5 text-xs">•</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const TermsPage = () => {
    return (
        <Wrapper className="relative">
            <div className="relative flex flex-col items-center justify-center w-full py-12 md:py-20">
                <Container className="py-8 md:py-12 max-w-6xl mx-auto">
                    <div className="relative flex flex-col items-center justify-center py-10 md:py-14 lg:py-20 px-4 md:px-8 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                        <div
                            className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                            style={{
                                background: "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)",
                            }}
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium !leading-tight max-w-3xl mx-auto">
                            Terms of <span className="font-subheading italic">Service</span>
                        </h1>
                        <p className="text-sm md:text-base text-accent-foreground/80 mt-5">
                            Last updated: {LAST_UPDATED}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-6 text-sm text-muted-foreground">
                            <span>{BUSINESS.legalName}</span>
                            <span className="hidden sm:inline text-border">|</span>
                            <Link href="https://7gence.com" className="hover:text-foreground transition-colors">
                                7gence.com
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="flex flex-col gap-12 md:gap-16 max-w-3xl mx-auto px-4 md:px-0 pb-12">

                <Section number={1} title="About These Terms">
                    <p>
                        These terms govern your use of 7gence.com and the services provided by{" "}
                        {BUSINESS.legalName}, a Wyoming limited liability company. 7Gence builds AI
                        automations, voice and chat agents, and workflow systems for businesses. By
                        using our website or contacting us about a project, you agree to these terms.
                    </p>
                </Section>

                <Section number={2} title="Our Services">
                    <p>
                        The scope, timeline and price of any project are set out in a separate written
                        proposal or agreement between you and {BUSINESS.legalName}. If that agreement
                        conflicts with these terms, the agreement wins.
                    </p>
                </Section>

                <Section number={3} title="Acceptable Use">
                    <p>You agree not to:</p>
                    <Bullets items={[
                        "Use our website or services for anything unlawful, fraudulent or abusive",
                        "Submit someone else's contact details without their permission",
                        "Interfere with the security or operation of the website",
                    ]} />
                </Section>

                <Section number={4} title="SMS Messaging Program" icon={MessageSquareIcon} id="sms">
                    <p>
                        <strong className="text-foreground font-medium">Program name:</strong>{" "}
                        {BUSINESS.smsProgramName}, operated by {BUSINESS.legalName}.
                    </p>
                    <p>
                        <strong className="text-foreground font-medium">What you receive:</strong>{" "}
                        text messages about a call or meeting you booked with us: booking
                        confirmations, reminders, reschedule or cancellation notices, and follow-ups
                        about your inquiry or project. We do not send promotional or marketing
                        messages under this program.
                    </p>
                    <p>
                        <strong className="text-foreground font-medium">How you opt in:</strong>{" "}
                        by ticking the optional SMS consent box on our{" "}
                        <Link href="/form" className={linkClass}>project inquiry form</Link>, by ticking the
                        equivalent consent option when you book a call with us on a scheduling page (such
                        as Calendly) or answer our onboarding questions, or by texting us first. Consent is
                        optional and is not a condition of booking a call or purchasing anything. We keep a
                        record of when and where you agreed.
                    </p>
                    <Bullets items={[
                        "Message frequency varies with your bookings, typically a few messages per appointment.",
                        "Message and data rates may apply, depending on your mobile plan.",
                        <>
                            To stop receiving messages, reply <strong className="text-foreground font-medium">STOP</strong> at any
                            time. We will confirm your opt-out and send no further messages.
                        </>,
                        <>
                            For help, reply <strong className="text-foreground font-medium">HELP</strong>, email{" "}
                            <Link href={`mailto:${BUSINESS.email}`} className={linkClass}>{BUSINESS.email}</Link>
                            {BUSINESS.phone && <>, or call {BUSINESS.phoneDisplay}</>}.
                        </>,
                        "Supported carriers are not liable for delayed or undelivered messages.",
                        <>
                            Your phone number and consent are never sold or shared with third parties for
                            marketing or promotional purposes. See our{" "}
                            <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>.
                        </>,
                    ]} />
                </Section>

                <Section number={5} title="Intellectual Property">
                    <p>
                        The 7Gence name, logo and website content belong to {BUSINESS.legalName}.
                        Ownership of deliverables is governed by your project agreement.
                    </p>
                </Section>

                <Section number={6} title="Disclaimers and Liability">
                    <p>
                        The website is provided as is. To the extent the law allows, {BUSINESS.legalName}{" "}
                        is not liable for indirect or consequential losses arising from your use of the
                        website. Nothing here limits liability that cannot be limited by law.
                    </p>
                </Section>

                <Section number={7} title="Governing Law and Changes">
                    <p>
                        These terms are governed by the laws of the State of Wyoming, USA. We may update
                        them from time to time; the date at the top shows the latest version.
                    </p>
                </Section>

                <Section number={8} title="Contact Us">
                    <div className="space-y-2">
                        <p className="text-foreground font-medium">{BUSINESS.legalName}</p>
                        <p>{BUSINESS_ADDRESS_ONE_LINE}</p>
                        <p>
                            Email:{" "}
                            <Link href={`mailto:${BUSINESS.email}`} className={linkClass}>{BUSINESS.email}</Link>
                        </p>
                        {BUSINESS.phone && <p>Phone: {BUSINESS.phoneDisplay}</p>}
                    </div>
                </Section>
            </div>
        </Wrapper>
    );
};

export default TermsPage;
