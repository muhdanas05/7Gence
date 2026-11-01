import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/constants/business";
import { generateMetadata } from "@/utils";
import { CalendarIcon, ClipboardListIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
    title: "Contact",
    description: "Contact 7Gence LLC: email, phone, mailing address, and ways to book a call.",
});

const linkClass = "text-foreground hover:text-primary underline underline-offset-4 transition-colors";

const Row = ({ icon: Icon, label, children }: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    children: React.ReactNode;
}) => (
    <div className="flex items-start gap-4">
        <Icon className="size-5 text-primary mt-0.5 shrink-0" />
        <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <div className="mt-1 text-foreground">{children}</div>
        </div>
    </div>
);

const ContactPage = () => {
    const { address } = BUSINESS;

    return (
        <Wrapper className="relative">
            <div className="max-w-3xl mx-auto px-4 md:px-0 py-16 md:py-24">
                <Container>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium !leading-tight">
                        Contact <span className="font-subheading italic">us</span>
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        The fastest way to reach {BUSINESS.legalName} is to book a call or send a
                        project inquiry. We reply to email within one business day.
                    </p>
                </Container>

                <Container delay={0.1}>
                    <div className="mt-10 space-y-7 rounded-2xl border border-border/50 bg-background/40 p-6 md:p-8">
                        <Row icon={MailIcon} label="Email">
                            <Link href={`mailto:${BUSINESS.email}`} className={linkClass}>{BUSINESS.email}</Link>
                        </Row>
                        {BUSINESS.phone && (
                            <Row icon={PhoneIcon} label="Phone and SMS">
                                <Link href={`tel:${BUSINESS.phone}`} className={linkClass}>{BUSINESS.phoneDisplay}</Link>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Text HELP for help or STOP to opt out of messages.
                                </p>
                            </Row>
                        )}
                        <Row icon={MapPinIcon} label="Business address">
                            <p>{BUSINESS.legalName}</p>
                            <p>{address.line1}</p>
                            <p>{address.city}, {address.state} {address.zip}</p>
                        </Row>
                        <Row icon={CalendarIcon} label="Book a call">
                            <Link
                                href="https://cal.com/muhammad-anas-s6hodg/discovery-call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                            >
                                Free AI strategy audit (30 min, open 24/7)
                            </Link>
                        </Row>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link href="/form">
                            <Button>
                                <ClipboardListIcon className="size-4" />
                                Send a project inquiry
                            </Button>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>
                            {" · "}
                            <Link href="/terms" className={linkClass}>Terms of Service</Link>
                        </p>
                    </div>
                </Container>
            </div>
        </Wrapper>
    );
};

export default ContactPage;
