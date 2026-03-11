import {
    ChartColumnBigIcon,
    DatabaseIcon,
    TrendingUpIcon,
    WandSparklesIcon,
    ZapIcon
} from "lucide-react";

export const FEATURES = [
    {
        title: "Turn Your Website Into a Conversion Machine",
        description: "A standalone AI chatbot or one built into your website — it extracts your business knowledge and uses it to answer questions, book appointments, and qualify leads around the clock. No human needed. No inquiry left unanswered.",
        icon: WandSparklesIcon,
        image: "/images/feature-two.svg",
    },
    {
        title: "Never Miss a Lead Again",
        description: "Inbound and outbound AI voice agents that handle calls, qualify prospects, and book appointments with human-level accuracy. Your phone lines covered 24/7 — without hiring a single additional person.",
        icon: ChartColumnBigIcon,
        image: "/images/feature-one.svg",
    },
    {
        title: "AI That Actually Knows Your Business",
        description: "Upload your documents, policies, and internal data. Get a chatbot that answers from your knowledge base — not the internet. Accurate, secure, and always up to date. Perfect for teams, franchises, and customer support.",
        icon: DatabaseIcon,
        image: "/images/feature-three.svg",
    },
    {
        title: "Ask Your Data Anything",
        description: "No SQL. No analyst. Just type your question in plain English and instantly get reports, insights, and analytics from your own database. Make faster, smarter decisions without technical bottlenecks.",
        icon: TrendingUpIcon,
        image: "/images/feature-four.svg",
    },
    {
        title: "Stop Paying People to Do Things a Machine Can Do",
        description: "We map your most repetitive workflows and automate them end-to-end — from customer interactions to backend processes. Save hours every week, cut costs, and scale your output without scaling your headcount.",
        icon: ZapIcon,
        image: "/images/feature-five.svg",
    }
]