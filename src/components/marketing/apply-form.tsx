'use client'

/**
 * Multi-step application wizard + its page shell. Ported from the pilot form in
 * the email-campaign repo, generalised over a `steps` config so the Project
 * Inquiry and the Agency Developer Program can share one implementation.
 *
 * Callers stay server components: every value in `steps` is serialisable, which
 * is why date minimums are a `minToday` flag rather than a computed string —
 * `new Date()` in a statically prerendered page would freeze at build time.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

type Option = string | { value: string; label: string };

export type FieldDef = {
    name: string;
    label: string;
    placeholder?: string;
    kind: "input" | "select" | "textarea" | "radio";
    inputType?: string;
    options?: Option[];
    required?: boolean;
    /** Date fields only: floor the picker at the current day, resolved in the browser. */
    minToday?: boolean;
    /** Render only when another field holds this exact value. */
    showIf?: { field: string; equals: string };
};

export type Step = {
    title: string;
    blurb: string;
    fields: FieldDef[];
};

type Props = {
    eyebrow: string;
    heading: string;
    blurb: string;
    /** Giant background wordmark. Keep it short — it is sized off the viewport. */
    watermark: string;
    sideNote: string;
    steps: Step[];
    webhookUrl: string;
    submitLabel: string;
    successTitle: string;
    successBody: string;
    backHref: string;
    backLabel: string;
    /** Side card artwork: the starburst photo, or the procedural ink burst. */
    art?: "star" | "burst";
    /** Merged into the POST body, e.g. a source tag for routing in n8n. */
    extraPayload?: Record<string, string>;
};

const opt = (o: Option) => (typeof o === "string" ? { value: o, label: o } : o);

/**
 * Radial ink burst, no asset. Spokes come from repeating-conic-gradient; the three
 * layers use angular periods sharing no common factor (2.3 / 3.7 / 7.1 deg) so they
 * interfere and spoke widths read irregular rather than like a clock face.
 * Interference is wanted here — the inverse of a halftone screen, where mismatched
 * pitches produce an unwanted moiré.
 *
 * ORIGIN must be identical on every layer, or the spokes converge on different
 * points and the burst loses its centre.
 */
const ORIGIN = "49% 43%";

const SPOKES: [from: string, width: string, period: string, opacity: number][] = [
    ["0deg", "0.9deg", "2.3deg", 1],
    ["11deg", "1.5deg", "3.7deg", 0.9],
    ["29deg", "2.8deg", "7.1deg", 0.75],
];

// Hollows out the very centre — otherwise every spoke converges into a solid black disc.
const BURST_FADE = `radial-gradient(circle at ${ORIGIN}, transparent 0%, rgba(0,0,0,0.35) 3%, #000 12%, #000 100%)`;

const InkBurst = () => (
    <div className="absolute inset-0 bg-white">
        {/* Turbulence warps the straight conic spokes into torn, uneven streaks — the
            organic quality a gradient alone cannot give. If the filter is unsupported
            it is simply ignored and the clean starburst shows through. */}
        <svg aria-hidden="true" className="absolute size-0">
            <filter id="ink-warp" x="-20%" y="-20%" width="140%" height="140%">
                {/* High frequency + small scale frays the spoke EDGES. Low frequency with a
                    large scale would bend whole spokes into wood grain instead. */}
                <feTurbulence type="fractalNoise" baseFrequency="0.07 0.11" numOctaves={4} seed={7} result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale={9} xChannelSelector="R" yChannelSelector="G" />
            </filter>
        </svg>

        <div className="absolute inset-0" style={{ filter: "url(#ink-warp)" }}>
            {SPOKES.map(([from, width, period, opacity]) => (
                <div
                    key={period}
                    className="absolute inset-0"
                    style={{
                        opacity,
                        backgroundImage: `repeating-conic-gradient(from ${from} at ${ORIGIN}, #000 0deg ${width}, transparent ${width} ${period})`,
                        maskImage: BURST_FADE,
                        WebkitMaskImage: BURST_FADE,
                    }}
                />
            ))}
        </div>

        {/* the torn knot at the point of impact, left unwarped so the centre stays a point */}
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `radial-gradient(circle 9px at ${ORIGIN}, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)`,
            }}
        />
    </div>
);

const ApplyForm = ({
    eyebrow, heading, blurb, watermark, sideNote, steps,
    webhookUrl, submitLabel, successTitle, successBody,
    backHref, backLabel, art = "star", extraPayload,
}: Props) => {
    const [step, setStep] = React.useState(0);
    const [submitting, setSubmitting] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const allFields = React.useMemo(() => steps.flatMap((s) => s.fields), [steps]);

    const { control, register, watch, handleSubmit, trigger, formState: { errors } } = useForm<Record<string, string>>({
        defaultValues: Object.fromEntries(allFields.map((f) => [f.name, ""])),
        mode: "onTouched",
    });

    const values = watch();
    const visible = (f: FieldDef) => !f.showIf || values[f.showIf.field] === f.showIf.equals;

    // Only gate on fields the user can actually see — a hidden conditional field
    // marked required would deadlock the step.
    async function next() {
        const gate = steps[step].fields.filter((f) => f.required && visible(f)).map((f) => f.name);
        if (gate.length && !(await trigger(gate))) return;
        setStep((s) => Math.min(s + 1, steps.length - 1));
    }

    async function onSubmit(data: Record<string, string>) {
        setSubmitting(true);
        try {
            const res = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, ...extraPayload }),
            });
            if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
            setSuccess(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Something went wrong sending that. Please try again, or email anas@7gence.com.");
        } finally {
            setSubmitting(false);
        }
    }

    // Labels double as questions ("When do you need this completed by?"), so
    // "<label> is required" only reads well on the short noun-phrase ones.
    const requiredMessage = (f: FieldDef) => {
        if (f.kind === "select" || f.kind === "radio") return "Please pick an option";
        return f.label.endsWith("?") ? "Required" : `${f.label} is required`;
    };

    const rules = (f: FieldDef) => ({
        required: f.required ? requiredMessage(f) : false,
        ...(f.inputType === "email" && {
            pattern: { value: /.+@.+\..+/, message: "That email does not look right" },
        }),
    });

    const current = steps[step];
    const isLast = step === steps.length - 1;

    return (
        <div className="relative w-full overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading font-bold leading-[0.8] text-[clamp(6rem,22vw,20rem)] bg-gradient-to-b from-foreground/[0.13] to-foreground/[0.02] bg-clip-text text-transparent"
            >
                {watermark}
            </div>

            <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_380px]">
                <div className="max-w-xl">
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        {backLabel}
                    </Link>

                    <p className="mt-8 text-sm font-medium tracking-widest text-blue-300/80 uppercase">
                        {eyebrow}
                    </p>
                    <h1 className="mt-3 text-4xl lg:text-5xl font-heading font-bold !leading-tight">
                        {heading}
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        {blurb}
                    </p>

                    <div className="mt-10">
                        {success ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="flex size-14 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10">
                                    <Check className="size-7 text-emerald-400" />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold">{successTitle}</h3>
                                <p className="mt-2 max-w-sm text-sm text-muted-foreground">{successBody}</p>
                                <Link href={backHref}>
                                    <Button variant="outline" className="mt-6">
                                        <ArrowLeft className="size-4" />
                                        {backLabel}
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <form
                                /* Single dispatch point, decided at event time. Next/Submit share a DOM node
                                   across steps (React reuses it), so a per-button type= is a race: clicking
                                   Next on the second-to-last step can default-submit after the node flips.
                                   Routing through onSubmit also makes Enter advance the step. */
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (isLast) handleSubmit(onSubmit)();
                                    else next();
                                }}
                                className="relative"
                            >
                                {/* stepper */}
                                <div className="flex items-center gap-0 mb-8">
                                    {steps.map((s, i) => (
                                        <React.Fragment key={s.title}>
                                            <div className="flex items-center gap-2.5 shrink-0">
                                                <div className={
                                                    i < step
                                                        ? "flex size-8 items-center justify-center rounded-full bg-blue-500 text-white"
                                                        : i === step
                                                            ? "flex size-8 items-center justify-center rounded-full border border-blue-400/70 bg-blue-500/15 text-blue-200 text-sm font-semibold shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                                                            : "flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground text-sm"
                                                }>
                                                    {i < step ? <Check className="size-4" /> : i + 1}
                                                </div>
                                                <span className={`text-sm hidden sm:block ${i === step ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                                                    {s.title}
                                                </span>
                                            </div>
                                            {i < steps.length - 1 && (
                                                <div className={`mx-3 h-px flex-1 ${i < step ? "bg-blue-500/70" : "bg-white/10"}`} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <p className="text-sm text-muted-foreground mb-6">{current.blurb}</p>

                                <div className="space-y-5" key={step}>
                                    {current.fields.filter(visible).map((f) => (
                                        <div key={f.name} className="space-y-2">
                                            <label htmlFor={f.name} className="block text-sm font-medium text-foreground/90">
                                                {f.label}
                                                {f.required && <span className="text-blue-400"> *</span>}
                                            </label>

                                            {f.kind === "input" && f.inputType === "date" && (
                                                <Controller
                                                    control={control}
                                                    name={f.name}
                                                    rules={rules(f)}
                                                    render={({ field }) => (
                                                        <DatePicker
                                                            id={f.name}
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            ariaLabel={f.label}
                                                            placeholder={f.placeholder ?? "Pick a date"}
                                                            minToday={f.minToday}
                                                            invalid={!!errors[f.name]}
                                                        />
                                                    )}
                                                />
                                            )}

                                            {f.kind === "input" && f.inputType !== "date" && (
                                                <Input
                                                    id={f.name}
                                                    type={f.inputType ?? "text"}
                                                    placeholder={f.placeholder}
                                                    className="bg-white/[0.03] border-white/10 focus-visible:ring-blue-500/50 h-11"
                                                    {...register(f.name, rules(f))}
                                                />
                                            )}

                                            {f.kind === "textarea" && (
                                                <Textarea
                                                    id={f.name}
                                                    placeholder={f.placeholder}
                                                    className="bg-white/[0.03] border-white/10 focus-visible:ring-blue-500/50 min-h-24"
                                                    {...register(f.name, rules(f))}
                                                />
                                            )}

                                            {f.kind === "select" && (
                                                <Controller
                                                    control={control}
                                                    name={f.name}
                                                    rules={rules(f)}
                                                    render={({ field }) => (
                                                        <Select value={field.value} onValueChange={field.onChange}>
                                                            <SelectTrigger id={f.name} className="bg-white/[0.03] border-white/10 h-11">
                                                                <SelectValue placeholder={f.placeholder ?? "Select one"} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {f.options!.map(opt).map((o) => (
                                                                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                />
                                            )}

                                            {f.kind === "radio" && (
                                                <Controller
                                                    control={control}
                                                    name={f.name}
                                                    rules={rules(f)}
                                                    render={({ field }) => (
                                                        <RadioGroup
                                                            value={field.value}
                                                            onValueChange={field.onChange}
                                                            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1"
                                                        >
                                                            {f.options!.map(opt).map((o) => (
                                                                <div key={o.value} className="flex items-center gap-2">
                                                                    <RadioGroupItem value={o.value} id={`${f.name}-${o.value}`} />
                                                                    <Label htmlFor={`${f.name}-${o.value}`} className="font-normal cursor-pointer">
                                                                        {o.label}
                                                                    </Label>
                                                                </div>
                                                            ))}
                                                        </RadioGroup>
                                                    )}
                                                />
                                            )}

                                            {errors[f.name] && (
                                                <p className="text-xs text-red-400">{errors[f.name]?.message as string}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className={step === 0 ? "invisible" : ""}
                                        onClick={() => setStep((s) => Math.max(s - 1, 0))}
                                    >
                                        <ArrowLeft className="size-4" />
                                        Back
                                    </Button>
                                    {isLast ? (
                                        <Button key="submit" type="submit" disabled={submitting}>
                                            {submitting ? "Sending..." : submitLabel}
                                        </Button>
                                    ) : (
                                        <Button key="next" type="submit">
                                            Next
                                            <ArrowRight className="size-4" />
                                        </Button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <div className="relative hidden lg:block h-[560px] rounded-2xl border border-white/10 overflow-hidden">
                    {art === "burst" ? (
                        <InkBurst />
                    ) : (
                        <Image
                            src="/images/halftone-star.png"
                            alt=""
                            fill
                            priority
                            sizes="380px"
                            className="object-cover opacity-70"
                        />
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                        <p className="text-sm text-muted-foreground">{sideNote}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyForm;
