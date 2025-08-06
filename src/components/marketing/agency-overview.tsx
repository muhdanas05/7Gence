import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const AgencyOverview = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Agency Programs Overview
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4">
                        Explore our specialized programs for agencies: on-demand AI development solutions.
                    </p>
                </div>
                <div className="flex justify-center max-w-6xl mx-auto">
                    {/* Agency Developer Program */}
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 w-full max-w-2xl">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-6 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4 md:space-y-6 relative z-30">
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    Developer Program
                                </h3>
                                <ul className="space-y-2 md:space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>AI developers on‑demand</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>White‑label code, fully documented</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Integration with your stack (API, RAG, Agents)</span>
                                    </li>
                                </ul>
                            </div>
                        </MagicCard>
                    </div>

                    {/* Growth Automation Program - Commented Out */}
                    {/* <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#a855f7"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(168,85,247,0.1)"
                            className="p-6 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-purple-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4 md:space-y-6 relative z-30">
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    Lead Generation Program
                                </h3>
                                <ul className="space-y-2 md:space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Plug‑and‑play lead‑gen workflows</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Automated outreach & follow‑up</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Dashboard templates & analytics</span>
                                    </li>
                                </ul>
                            </div>
                        </MagicCard>
                    </div> */}
                </div>
            </Container>
        </div>
    )
};

export default AgencyOverview 