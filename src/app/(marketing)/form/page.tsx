'use client'

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Wrapper from "@/components/global/wrapper";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const WEBHOOK_URL = "https://n8n-v1-xh7y.onrender.com/webhook/94edb84c-5cda-4cef-8c41-7544c6f9294c"; // Fixed webhook URL

const budgetOptions = [
  "<$1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  ">$25,000",
  "Not sure yet"
];
const timelineOptions = [
  "2 weeks",
  "1 month",
  "2-3 months",
  "Flexible timeline"
];
const goalOptions = [
  "Improve efficiency",
  "Reduce costs",
  "Increase revenue",
  "Enhance user experience",
  "Other"
];

type FormValues = {
  name: string;
  email: string;
  service: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  goal: string;
  goalOther: string;
  aiExperience: string;
  compliance: string;
  support: string;
  company: string;
  phone: string;
};

export default function FormPage() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      service: "",
      projectDescription: "",
      budget: "",
      timeline: "",
      goal: "",
      goalOther: "",
      aiExperience: "",
      compliance: "",
      support: "",
      company: "",
      phone: "",
    },
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    setSuccess(false);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) setSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Wrapper className="py-20 flex flex-col items-center min-h-[60vh]">
      <div className="w-full max-w-xl bg-card rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Project Inquiry Form</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="123-456-7890" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Service Type */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What type of service do you need help with?</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Missed call text-back, AI chatbot for website, Instagram DM auto-responder, CRM setup, appointment reminders, or review request automation." {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Project Description */}
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Can you briefly describe the project or idea you're working on?</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Automating follow-ups for missed calls, setting up an AI assistant for social media DMs, reducing appointment no-shows with reminders, or capturing more website leads with a chatbot." {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Budget */}
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your estimated budget for this project?</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ""} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetOptions.map((option) => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Timeline */}
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>When do you need this project completed by?</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ""} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelineOptions.map((option) => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Primary Goal */}
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is the primary goal of this project?</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ""} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select goal" />
                          </SelectTrigger>
                          <SelectContent>
                            {goalOptions.map((option) => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                  {form.watch("goal") === "Other" && (
                    <FormControl>
                      <Input placeholder="Please specify" {...form.register("goalOther")}/>
                    </FormControl>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* AI Experience */}
            <FormField
              control={form.control}
              name="aiExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Have you worked with AI tools or automation before?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      className="flex flex-row gap-6 mt-2"
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <RadioGroupItem value="Yes" id="ai-yes" />
                      <FormLabel htmlFor="ai-yes">Yes</FormLabel>
                      <RadioGroupItem value="No" id="ai-no" />
                      <FormLabel htmlFor="ai-no">No</FormLabel>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Compliance/Privacy/Security */}
            <FormField
              control={form.control}
              name="compliance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Are there any compliance, privacy, or security requirements we should be aware of?</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe any requirements here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Ongoing Support */}
            <FormField
              control={form.control}
              name="support"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Would you like ongoing support and maintenance after the project is delivered?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      className="flex flex-row gap-6 mt-2"
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <RadioGroupItem value="Yes" id="support-yes" />
                      <FormLabel htmlFor="support-yes">Yes</FormLabel>
                      <RadioGroupItem value="No" id="support-no" />
                      <FormLabel htmlFor="support-no">No</FormLabel>
                      <RadioGroupItem value="Maybe" id="support-maybe" />
                      <FormLabel htmlFor="support-maybe">Maybe</FormLabel>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Company/Organization Name */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company/Organization Name (if applicable)</FormLabel>
                  <FormControl>
                    <Input placeholder="Company or organization name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </Button>
            {success && (
              <div className="space-y-4">
                <div className="text-green-600 text-center mt-2">Form submitted successfully!</div>
                <div className="flex justify-center">
                  <Link href="/" className="w-full sm:w-auto">
                    <Button variant="subtle" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3">
                      <ArrowLeft className="size-4" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </form>
        </Form>
      </div>
    </Wrapper>
  );
} 