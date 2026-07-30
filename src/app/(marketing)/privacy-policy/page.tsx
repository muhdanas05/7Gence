import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { MagicCard } from "@/components/ui/magic-card";
import { generateMetadata } from "@/utils";
import { BadgeCheckIcon, MessageSquareIcon } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
    title: "Privacy Policy",
    description: "How 7Gence LLC collects, uses, shares, and protects your information.",
});

const LAST_UPDATED = "July 29, 2026";

// ponytail: local to this page — legal copy is content, not a reusable pattern
const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
    <Container delay={0.1}>
        <section className="scroll-mt-24" id={`section-${number}`}>
            <h2 className="text-xl md:text-2xl font-heading font-medium !leading-snug flex items-baseline gap-3">
                <span className="text-primary/40 text-base md:text-lg tabular-nums">{number}.</span>
                {title}
            </h2>
            <div className="mt-4 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {children}
            </div>
        </section>
    </Container>
);

const Bullets = ({ items }: { items: string[] }) => (
    <ul className="space-y-2">
        {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
                <span className="text-primary mt-1.5 text-xs">•</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const PrivacyPolicyPage = () => {
    return (
        <Wrapper className="relative">
            {/* Hero */}
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
                            Privacy <span className="font-subheading italic">Policy</span>
                        </h1>
                        <p className="text-sm md:text-base text-accent-foreground/80 mt-5">
                            Last updated: {LAST_UPDATED}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-6 text-sm text-muted-foreground">
                            <span>7Gence LLC</span>
                            <span className="hidden sm:inline text-border">|</span>
                            <Link href="https://7gence.com" className="hover:text-foreground transition-colors">
                                7gence.com
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-12 md:gap-16 max-w-3xl mx-auto px-4 md:px-0 pb-12">

                <Section number={1} title="Information We Collect">
                    <p>
                        We collect information you provide directly to us, including your name, email address,
                        phone number, company name, and any other details you share when contacting us or using
                        our services.
                    </p>
                    <p>
                        We also collect usage data such as IP address, browser type, and pages visited via
                        cookies and analytics tools.
                    </p>
                </Section>

                <Section number={2} title="How We Use Your Information">
                    <p>We use the information we collect to:</p>
                    <Bullets items={[
                        "Deliver and manage our AI automation services",
                        "Communicate with you about your project or inquiry",
                        "Send appointment reminders, follow-ups, or service-related updates",
                        "Improve our website and services",
                        "Comply with legal obligations",
                    ]} />
                </Section>

                {/* SMS consent — carrier-facing disclosure, called out deliberately */}
                <Container delay={0.1}>
                    <section className="scroll-mt-24" id="section-3">
                        <div className="rounded-2xl bg-background/40 relative border border-border/50">
                            <MagicCard
                                gradientFrom="#38bdf8"
                                gradientTo="#3b82f6"
                                gradientColor="rgba(59,130,246,0.1)"
                                className="p-6 lg:p-8 w-full overflow-hidden"
                            >
                                <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20" />
                                <div className="relative z-30">
                                    <h2 className="text-xl md:text-2xl font-heading font-medium !leading-snug flex items-baseline gap-3">
                                        <span className="text-primary/40 text-base md:text-lg tabular-nums">3.</span>
                                        <span className="flex items-center gap-2.5">
                                            <MessageSquareIcon className="size-5 text-primary shrink-0" />
                                            SMS / Text Messaging
                                        </span>
                                    </h2>
                                    <div className="mt-4 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                                        <p>
                                            By providing your phone number to 7Gence, you consent to receive SMS text
                                            messages from us related to your inquiry or project. This may include
                                            appointment confirmations, project updates, and follow-up messages.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-primary mt-1.5 text-xs">•</span>
                                                <span>Message frequency may vary</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-primary mt-1.5 text-xs">•</span>
                                                <span>Message and data rates may apply</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-primary mt-1.5 text-xs">•</span>
                                                <span>
                                                    Reply <strong className="text-foreground font-medium">STOP</strong> at any
                                                    time to opt out of SMS messages
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-primary mt-1.5 text-xs">•</span>
                                                <span>
                                                    Reply <strong className="text-foreground font-medium">HELP</strong> for
                                                    assistance or contact us at{" "}
                                                    <Link href="mailto:anas@7gence.com" className="text-foreground hover:text-primary underline underline-offset-4 transition-colors">
                                                        anas@7gence.com
                                                    </Link>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-primary mt-1.5 text-xs">•</span>
                                                <span>
                                                    We do not sell, share, or transfer your phone number or SMS consent to
                                                    third parties for marketing purposes
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </section>
                </Container>

                <Section number={4} title="How We Share Your Information">
                    <p>We do not sell your personal information. We may share data with:</p>
                    <Bullets items={[
                        "Trusted third-party tools we use to operate our services (e.g. CRM, automation platforms)",
                        "Legal authorities if required by law",
                    ]} />
                    <p>
                        All third-party tools we use are bound by their own privacy policies and data protection
                        standards.
                    </p>
                </Section>

                <Section number={5} title="Cookies">
                    <p>
                        Our website uses cookies to understand how visitors use the site. You can disable cookies
                        in your browser settings at any time.
                    </p>
                </Section>

                <Section number={6} title="Data Retention">
                    <p>
                        We retain your information only as long as necessary to provide our services or as
                        required by law.
                    </p>
                </Section>

                <Section number={7} title="Your Rights">
                    <p>You have the right to:</p>
                    <Bullets items={[
                        "Request access to the data we hold about you",
                        "Request correction or deletion of your data",
                        "Opt out of SMS communications at any time by replying STOP",
                    ]} />
                    <p>
                        To exercise any of these rights, email us at{" "}
                        <Link href="mailto:anas@7gence.com" className="text-foreground hover:text-primary underline underline-offset-4 transition-colors">
                            anas@7gence.com
                        </Link>
                        .
                    </p>
                </Section>

                <Section number={8} title="Security">
                    <p>
                        We use reasonable technical and organizational measures to protect your data. No method of
                        transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </Section>

                <Section number={9} title="Contact Us">
                    <p>If you have questions about this Privacy Policy:</p>
                    <div className="space-y-2">
                        <p className="text-foreground font-medium">7Gence LLC</p>
                        <p>
                            Email:{" "}
                            <Link href="mailto:anas@7gence.com" className="text-foreground hover:text-primary underline underline-offset-4 transition-colors">
                                anas@7gence.com
                            </Link>
                        </p>
                        <p>
                            Website:{" "}
                            <Link href="https://7gence.com" className="text-foreground hover:text-primary underline underline-offset-4 transition-colors">
                                7gence.com
                            </Link>
                        </p>
                    </div>
                </Section>

                {/* Registration */}
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#a855f7"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(168,85,247,0.1)"
                            className="p-6 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-purple-500 w-1/4 h-1/4 blur-[8rem] z-20" />
                            <div className="relative z-30">
                                <h3 className="text-lg md:text-xl font-heading font-medium flex items-center gap-2.5">
                                    <BadgeCheckIcon className="size-5 text-primary shrink-0" />
                                    Registered in the USA
                                </h3>
                                <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                                    <p className="text-foreground font-medium">7Gence LLC</p>
                                    <p>State of Wyoming, USA</p>
                                    <p>Filed 10 June 2026 · Status: Active, Good Standing</p>
                                </div>
                                <p className="mt-4 text-xs text-muted-foreground/80">
                                    Verifiable on the Wyoming Secretary of State business registry.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </Wrapper>
    );
};

export default PrivacyPolicyPage;
