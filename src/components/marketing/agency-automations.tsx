import { Bot, MessageSquare, Mail, Star, BarChart3, Library } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const leadGenFeatures = [
    {
        title: "Cold Email Campaigns",
        description: "Automation for targeted outreach sequences",
        icon: MessageSquare,
        color: "text-blue-500"
    },
    {
        title: "Template Library",
        description: "Ready-to-use lead gen workflows",
        icon: Library,
        color: "text-green-500"
    },
    {
        title: "CRM Integrations & Analytics",
        description: "Real-time metrics, campaign tracking, ROI insights",
        icon: BarChart3,
        color: "text-pink-500"
    }
];

const AgencyAutomations = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Lead Generation Program
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4">
                        Cold email campaigns & plug-and-play automation templates
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                    {leadGenFeatures.map((feature, index) => (
                        <div key={index} className="rounded-2xl bg-background/40 relative border border-border/50 dark:bg-zinc-900/80 shadow-lg flex flex-col items-center justify-start p-6 lg:p-8 h-full">
                            <div className={`w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center ${feature.color}`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div> 
            </Container>
        </div>
    )
};

export default AgencyAutomations 