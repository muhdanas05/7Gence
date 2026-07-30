import ApplyForm, { type Step } from "@/components/marketing/apply-form";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
    title: "Project Inquiry",
    description: "Tell us about your project and we'll map out where AI can deliver the highest ROI.",
});

// Field names and the webhook are unchanged from the single-page version, so the
// n8n workflow behind this keeps receiving the same 13 keys.
const WEBHOOK_URL = "https://n8n-v1-xh7y.onrender.com/webhook/94edb84c-5cda-4cef-8c41-7544c6f9294c";

const STEPS: Step[] = [
    {
        title: "About you",
        blurb: "How we reach you once we've read this.",
        fields: [
            { name: "name", label: "Name", placeholder: "Your name", kind: "input", required: true },
            { name: "email", label: "Email", placeholder: "you@company.com", kind: "input", inputType: "email", required: true },
            { name: "phone", label: "Phone number", placeholder: "+1 555 000 0000", kind: "input", inputType: "tel", required: true },
            { name: "company", label: "Company or organization", placeholder: "Company name (if applicable)", kind: "input" },
        ],
    },
    {
        title: "Your project",
        blurb: "The shape of the work, roughly.",
        fields: [
            {
                name: "service",
                label: "What type of service do you need help with?",
                placeholder: "e.g. missed call text-back, AI chatbot, Instagram DM auto-responder, CRM setup",
                kind: "input",
                required: true,
            },
            {
                name: "projectDescription",
                label: "Briefly describe the project or idea you're working on",
                placeholder: "e.g. automating follow-ups for missed calls, reducing appointment no-shows with reminders",
                kind: "textarea",
                required: true,
            },
            {
                name: "budget",
                label: "Estimated budget for this project",
                placeholder: "Select budget range",
                kind: "select",
                required: true,
                options: ["<$1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", ">$25,000", "Not sure yet"],
            },
            {
                name: "timeline",
                label: "When do you need this completed by?",
                placeholder: "Select timeline",
                kind: "select",
                required: true,
                options: ["2 weeks", "1 month", "2-3 months", "Flexible timeline"],
            },
        ],
    },
    {
        title: "Details",
        blurb: "So the first call starts ahead, not from zero.",
        fields: [
            {
                name: "goal",
                label: "Primary goal of this project",
                placeholder: "Select goal",
                kind: "select",
                required: true,
                options: ["Improve efficiency", "Reduce costs", "Increase revenue", "Enhance user experience", "Other"],
            },
            {
                name: "goalOther",
                label: "Please specify",
                placeholder: "Your primary goal",
                kind: "input",
                showIf: { field: "goal", equals: "Other" },
            },
            {
                name: "aiExperience",
                label: "Have you worked with AI tools or automation before?",
                kind: "radio",
                options: ["Yes", "No"],
            },
            {
                name: "support",
                label: "Would you like ongoing support and maintenance after delivery?",
                kind: "radio",
                options: ["Yes", "No", "Maybe"],
            },
            {
                name: "compliance",
                label: "Any compliance, privacy, or security requirements we should know about?",
                placeholder: "Describe any requirements here...",
                kind: "textarea",
            },
        ],
    },
];

const FormPage = () => (
    <ApplyForm
        eyebrow="Project inquiry"
        heading="Tell us what to build"
        blurb="A few questions so the first call starts with a plan instead of a blank page. Three steps, about two minutes."
        watermark="INQUIRY"
        sideNote="We limit ourselves to three active projects at a time, so every client gets our full focus."
        steps={STEPS}
        webhookUrl={WEBHOOK_URL}
        submitLabel="Submit inquiry"
        successTitle="Inquiry received"
        successBody="Thanks. We'll read through it and get back to you shortly to set up a call."
        backHref="/"
        backLabel="Back to home"
    />
);

export default FormPage;
