import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4 md:px-0">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        From Zero to Deployed <br /><span className="font-subheading italic">in 3 Steps</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-accent-foreground/80 mt-4">
                        We limit ourselves to <strong>3 active projects at a time</strong>, so every client gets our full focus.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative w-full px-4 md:px-0">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    1. We Listen Before We Build
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    A focused discovery call where we map your workflows, identify where AI can deliver the highest ROI, and spec out exactly what needs to be built. No templates. No guesses.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.3}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    2. We Build. You Review. Then It Goes Live.
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Your system is built, tested, and deployed with you in the loop at every milestone. Fully documented, and the source is yours.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.4}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-indigo-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    3. We Don&apos;t Vanish After Launch
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    We monitor performance, fix edge cases, and scale what&apos;s working. Most systems improve significantly in the 30 days after go-live.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
