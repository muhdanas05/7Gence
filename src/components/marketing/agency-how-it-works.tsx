import { ClipboardList, Rocket, TrendingUp } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const steps = [
    {
        number: "1",
        title: "Apply & Audit",
        description: "Fill out a brief form. We'll review your needs and match you with the ideal developer(s) or automation kit.",
        icon: ClipboardList
    },
    {
        number: "2",
        title: "Launch & Integrate",
        description: "Kick off with sprint-based delivery or plug in our pre-built flows. Full documentation included.",
        icon: Rocket
    },
    {
        number: "3",
        title: "Scale & Support",
        description: "Ongoing optimization and onboarding materials to keep your team self-sufficient.",
        icon: TrendingUp
    }
];

const AgencyHowItWorks = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        How It Works
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4">
                        Simple 3-step process to get you started
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="rounded-2xl bg-background/40 relative border border-border/50">
                            <MagicCard
                                gradientFrom="#38bdf8"
                                gradientTo="#3b82f6"
                                gradientColor="rgba(59,130,246,0.1)"
                                className="p-6 lg:p-8 w-full overflow-hidden h-full"
                            >
                                <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                                <div className="space-y-4 md:space-y-6 relative z-30 h-full flex flex-col">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base md:text-lg">
                                            {step.number}
                                        </div>
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
};

export default AgencyHowItWorks 