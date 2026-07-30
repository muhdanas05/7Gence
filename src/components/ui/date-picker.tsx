"use client"

/**
 * Themed date picker: labelled trigger + popover calendar with a Cancel/Apply footer,
 * replacing the browser's native date control so it matches the rest of the form.
 *
 * The selection is held as a draft while the popover is open — Apply commits it,
 * Cancel discards. `value`/`onChange` stay on the "YYYY-MM-DD" wire format the
 * form posts; the trigger shows a friendlier rendering of it.
 */

import * as React from "react"
import { DayPicker } from "react-day-picker"
import { format, parse, isValid } from "date-fns"
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const WIRE = "yyyy-MM-dd"

const toDate = (wire: string) => {
    if (!wire) return undefined
    const d = parse(wire, WIRE, new Date())
    return isValid(d) ? d : undefined
}

/** Midnight local, so "today" comparisons don't trip over the current time of day. */
const startOfToday = () => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
}

type Props = {
    id?: string
    /** "YYYY-MM-DD", or "" when unset. */
    value: string
    onChange: (value: string) => void
    /** Small caption inside the trigger. Generic by design — the field's own label sits above it. */
    label?: string
    /** What a screen reader announces; pass the field label since the visible caption is generic. */
    ariaLabel?: string
    placeholder?: string
    /** Disable every day before today. */
    minToday?: boolean
    invalid?: boolean
}

const DatePicker = ({
    id, value, onChange,
    label = "Select a day",
    ariaLabel,
    placeholder = "Pick a date",
    minToday,
    invalid,
}: Props) => {
    const [open, setOpen] = React.useState(false)
    const selected = toDate(value)
    const [draft, setDraft] = React.useState<Date | undefined>(selected)

    // Reopening should start from what is committed, not from an abandoned draft.
    React.useEffect(() => {
        if (open) setDraft(selected)
    }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

    const commit = () => {
        onChange(draft ? format(draft, WIRE) : "")
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    id={id}
                    type="button"
                    /* aria-label overrides the inner text for the accessible name, so the
                       chosen date has to be spelled out here or it is never announced. */
                    aria-label={`${ariaLabel ?? label}: ${selected ? format(selected, "dd MMM yyyy") : "no date selected"}`}
                    className={cn(
                        "group flex w-full items-center gap-3 rounded-md border bg-white/[0.03] px-3 py-2.5 text-left transition-colors",
                        "hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                        invalid ? "border-red-500/50" : "border-white/10",
                    )}
                >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-blue-500/15 text-blue-300">
                        <CalendarDaysIcon className="size-4" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                        <span className="text-xs text-muted-foreground">{label}</span>
                        <span className={cn("truncate text-sm", selected ? "text-foreground" : "text-muted-foreground/60")}>
                            {selected ? format(selected, "dd MMM yyyy") : placeholder}
                        </span>
                    </span>
                    <ChevronUpIcon
                        className={cn(
                            "ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                            !open && "rotate-180",
                        )}
                    />
                </button>
            </PopoverTrigger>

            <PopoverContent
                align="start"
                className="w-auto border-white/10 bg-neutral-950/95 p-0 backdrop-blur-xl"
            >
                <DayPicker
                    mode="single"
                    selected={draft}
                    onSelect={setDraft}
                    defaultMonth={draft ?? startOfToday()}
                    weekStartsOn={1}
                    showOutsideDays
                    disabled={minToday ? { before: startOfToday() } : undefined}
                    formatters={{ formatWeekdayName: (day) => format(day, "EEEEEE") }}
                    className="p-3"
                    classNames={{
                        months: "flex flex-col",
                        month: "space-y-3",
                        caption: "relative flex items-center justify-center pt-1",
                        caption_label: "text-sm font-medium text-foreground",
                        nav: "flex items-center",
                        nav_button:
                            "inline-flex size-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground disabled:opacity-30",
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse",
                        head_row: "flex",
                        head_cell: "w-9 text-[0.7rem] font-normal uppercase tracking-wide text-muted-foreground/70",
                        row: "mt-1 flex w-full",
                        cell: "relative p-0 text-center text-sm",
                        day: "inline-flex size-9 items-center justify-center rounded-md font-normal text-foreground/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                        day_selected: "bg-blue-500 font-medium text-white hover:bg-blue-500 focus:bg-blue-500",
                        // A dot under the number, so "today" stays readable next to the selected day.
                        day_today:
                            "relative after:absolute after:bottom-1 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-blue-400 aria-selected:after:bg-white",
                        day_outside: "text-muted-foreground/35",
                        day_disabled: "text-muted-foreground/25 line-through hover:bg-transparent",
                        day_hidden: "invisible",
                    }}
                    components={{
                        IconLeft: () => <ChevronLeftIcon className="size-4" />,
                        IconRight: () => <ChevronRightIcon className="size-4" />,
                    }}
                />

                <div className="flex items-center gap-2 border-t border-white/10 p-3">
                    <Button type="button" variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button type="button" className="flex-1" onClick={commit} disabled={!draft}>
                        Apply
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export { DatePicker }
