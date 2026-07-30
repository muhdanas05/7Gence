import ApplyForm, { type Step } from "@/components/marketing/apply-form";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
    title: "Developer Program Inquiry",
    description: "Tell us about your project and we'll match you with the right developers.",
});

// Field names and the webhook are unchanged from the single-page version, so the
// n8n workflow behind this keeps receiving the same 11 keys.
const WEBHOOK_URL = "https://n8n-v1-xh7y.onrender.com/webhook/2c75d23d-b29b-4e27-b9e9-2f0b2e0e35e7";

const STEPS: Step[] = [
    {
        title: "About you",
        blurb: "Who we'd be working with.",
        fields: [
            { name: "name", label: "Name", placeholder: "Your full name", kind: "input", required: true },
            { name: "email", label: "Email", placeholder: "your.email@company.com", kind: "input", inputType: "email", required: true },
            { name: "phone", label: "Phone number", placeholder: "+1 (555) 123-4567", kind: "input", inputType: "tel", required: true },
            { name: "company", label: "Company or organization name", placeholder: "Your company name", kind: "input", required: true },
        ],
    },
    {
        title: "The work",
        blurb: "What you need built, and by when.",
        fields: [
            {
                name: "developerType",
                label: "What kind of developers do you need?",
                placeholder: "e.g. AI automation specialists, voice agent developers, chatbot engineers",
                kind: "input",
                required: true,
            },
            {
                name: "projectDescription",
                label: "Briefly describe your project or the kind of work you want help with",
                placeholder: "Describe your requirements, goals, and what you're looking to achieve...",
                kind: "textarea",
                required: true,
            },
            {
                name: "projectDuration",
                label: "Estimated project duration",
                placeholder: "Select project duration",
                kind: "select",
                required: true,
                options: [
                    { value: "1-3 months", label: "1–3 months" },
                    { value: "3-6 months", label: "3–6 months" },
                    { value: "6+ months", label: "6+ months" },
                    { value: "Ongoing", label: "Ongoing" },
                ],
            },
            {
                name: "startDate",
                label: "Expected start date",
                kind: "input",
                inputType: "date",
                required: true,
                minToday: true,
            },
        ],
    },
    {
        title: "Fit",
        blurb: "So we match you with the right people first time.",
        fields: [
            {
                name: "previousExperience",
                label: "Have you previously worked with external developers or agencies?",
                kind: "radio",
                required: true,
                options: [
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                ],
            },
            {
                name: "discoveryCall",
                label: "Would you like to schedule a discovery call?",
                kind: "radio",
                required: true,
                options: [
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                    { value: "maybe", label: "Maybe" },
                ],
            },
            {
                name: "specificSkills",
                label: "Any specific skills, tools, or technologies you require?",
                placeholder: "e.g. Python, React, AWS, specific AI frameworks...",
                kind: "textarea",
            },
        ],
    },
];

const AgencyProgramFormPage = () => (
    <ApplyForm
        eyebrow="Developer program"
        heading="Apply for the program"
        blurb="Tell us about your project and we'll match you with the right developers. Three steps, about two minutes."
        watermark="AGENCY"
        art="burst"
        sideNote="Our experts become your experts — white-label code, fully documented, integrated with your stack."
        steps={STEPS}
        webhookUrl={WEBHOOK_URL}
        submitLabel="Submit inquiry"
        successTitle="Inquiry received"
        successBody="Thanks. We'll be in touch shortly to talk through the match."
        backHref="/agency-developer-program"
        backLabel="Back to Agency Program"
    />
);

export default AgencyProgramFormPage;
