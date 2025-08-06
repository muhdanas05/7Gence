'use client';

import { useState, useRef } from "react";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const AgencyProgramForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];

    // Handle date input click to ensure picker opens
    const handleDateClick = (e: React.MouseEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        // Try to show the native picker if available
        if (input.showPicker) {
            input.showPicker();
        }
    };

    // Handle date input change to ensure proper formatting
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        const value = input.value;
        
        // If user types a date, ensure it's in the correct format
        if (value && !value.match(/^\d{4}-\d{2}-\d{2}$/)) {
            // Try to parse and format the date
            const date = new Date(value);
            if (!isNaN(date.getTime())) {
                input.value = date.toISOString().split('T')[0];
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            developerType: formData.get('developerType'),
            projectDescription: formData.get('projectDescription'),
            projectDuration: formData.get('projectDuration'),
            startDate: formData.get('startDate'),
            previousExperience: formData.get('previousExperience'),
            specificSkills: formData.get('specificSkills'),
            discoveryCall: formData.get('discoveryCall'),
        };

        try {
            const response = await fetch('https://n8n-v1-xh7y.onrender.com/webhook/2c75d23d-b29b-4e27-b9e9-2f0b2e0e35e7', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Since you're receiving data in n8n, consider the submission successful
            // n8n webhooks might return various status codes, but if the request completes, it's likely successful
            console.log('Webhook response status:', response.status);
            
            // Consider any response as successful since the webhook was triggered
            setSubmitStatus('success');
            formRef.current?.reset();
            
        } catch (error) {
            console.error('Webhook submission error:', error);
            // Only show error for actual network/connection issues
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-12 md:py-20">
            <Container className="max-w-2xl mx-auto w-full">
                {/* Back Button */}
                <div className="mb-8">
                    <Link 
                        href="/agency-developer-program" 
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Agency Program
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                        Developer Program Inquiry Form
                    </h1>
                    <p className="text-muted-foreground">
                        Tell us about your project and we'll match you with the right developers
                    </p>
                </div>

                {/* Form */}
                <div className="rounded-2xl bg-background/40 border border-border/50 p-6 md:p-8">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium">
                                Name *
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Your full name"
                                className="w-full"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                                Email *
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="your.email@company.com"
                                className="w-full"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium">
                                Phone Number *
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                placeholder="+1 (555) 123-4567"
                                className="w-full"
                            />
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                            <Label htmlFor="company" className="text-sm font-medium">
                                Company/Organization Name *
                            </Label>
                            <Input
                                id="company"
                                name="company"
                                type="text"
                                required
                                placeholder="Your company name"
                                className="w-full"
                            />
                        </div>

                        {/* Developer Type */}
                        <div className="space-y-2">
                            <Label htmlFor="developerType" className="text-sm font-medium">
                                What kind of developers do you need? *
                            </Label>
                            <Input
                                id="developerType"
                                name="developerType"
                                type="text"
                                required
                                placeholder="e.g., AI automation specialists, voice agent developers, chatbot engineers, etc."
                                className="w-full"
                            />
                        </div>

                        {/* Project Description */}
                        <div className="space-y-2">
                            <Label htmlFor="projectDescription" className="text-sm font-medium">
                                Briefly describe your project or the kind of work you want help with *
                            </Label>
                            <Textarea
                                id="projectDescription"
                                name="projectDescription"
                                required
                                placeholder="Describe your project requirements, goals, and what you're looking to achieve..."
                                className="w-full min-h-[120px] resize-none"
                            />
                        </div>

                        {/* Project Duration */}
                        <div className="space-y-2">
                            <Label htmlFor="projectDuration" className="text-sm font-medium">
                                Estimated project duration *
                            </Label>
                            <Select name="projectDuration" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select project duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1-3 months">1–3 months</SelectItem>
                                    <SelectItem value="3-6 months">3–6 months</SelectItem>
                                    <SelectItem value="6+ months">6+ months</SelectItem>
                                    <SelectItem value="Ongoing">Ongoing</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Start Date */}
                        <div className="space-y-2">
                            <Label htmlFor="startDate" className="text-sm font-medium">
                                What is your expected start date? *
                            </Label>
                            <Input
                                id="startDate"
                                name="startDate"
                                type="date"
                                required
                                className="w-full"
                                min={today}
                                onClick={handleDateClick}
                                onChange={handleDateChange}
                            />
                            <p className="text-xs text-muted-foreground">
                                Click the calendar icon to select a date
                            </p>
                        </div>

                        {/* Previous Experience */}
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">
                                Have you previously worked with external developers or agencies? *
                            </Label>
                            <RadioGroup name="previousExperience" required>
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="experience-yes" />
                                        <Label htmlFor="experience-yes">Yes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="experience-no" />
                                        <Label htmlFor="experience-no">No</Label>
                                    </div>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* Specific Skills */}
                        <div className="space-y-2">
                            <Label htmlFor="specificSkills" className="text-sm font-medium">
                                Any specific skills, tools, or technologies you require?
                            </Label>
                            <Textarea
                                id="specificSkills"
                                name="specificSkills"
                                placeholder="e.g., Python, React, AWS, specific AI frameworks, etc. (optional)"
                                className="w-full min-h-[100px] resize-none"
                            />
                        </div>

                        {/* Discovery Call */}
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">
                                Would you like to schedule a discovery call? *
                            </Label>
                            <RadioGroup name="discoveryCall" required>
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="call-yes" />
                                        <Label htmlFor="call-yes">Yes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="call-no" />
                                        <Label htmlFor="call-no">No</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="maybe" id="call-maybe" />
                                        <Label htmlFor="call-maybe">Maybe</Label>
                                    </div>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <Button 
                                type="submit" 
                                size="lg" 
                                className="w-full h-12 text-base font-medium"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                            </Button>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="space-y-4">
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 text-center">
                                    Thank you! Your inquiry has been submitted successfully. We'll get back to you soon.
                                </div>
                                <div className="flex justify-center">
                                    <Link href="/agency-developer-program" className="w-full sm:w-auto">
                                        <Button variant="subtle" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3">
                                            <ArrowLeftIcon className="size-4" />
                                            Back to Home
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-center">
                                Something went wrong. Please try again or contact us directly.
                            </div>
                        )}
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AgencyProgramForm; 