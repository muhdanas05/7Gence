"use client";

import * as React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/global/container";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

// Placeholder job data (in real app, fetch by jobId)
const JOBS = [
  {
    id: "senior-automation-developer",
    title: "Senior Automation Developer",
    department: "Automation",
    location: "Bengaluru, India",
    employment: "Full-time",
    summary: "3-5 years in automation, AI workflows, remote friendly",
    salary: "₹12L–₹18L",
  },
  // ... more jobs
];

export default async function JobApplicationPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const router = useRouter();
  const job = JOBS.find((j) => j.id === jobId) || JOBS[0];

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: null,
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    referral: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Placeholder for autofill
  const handleAutofill = () => {
    // No real parsing, just a placeholder
    alert("Autofill from resume is a placeholder in this demo.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let file: File | null = null;
    if (e.target instanceof HTMLInputElement && e.target.files) {
      file = e.target.files[0];
    }
    setForm((prev) => ({
      ...prev,
      [name]: file ? file : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });
      data.append("jobTitle", job.title);
      data.append("department", job.department);
      data.append("location", job.location);
      data.append("employment", job.employment);
      data.append("salary", job.salary);
      const res = await fetch("https://n8n-v1-xh7y.onrender.com/webhook-test/4e38417e-5a66-4f0d-a543-b4c2b31803d5", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Failed to submit application");
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        resume: null,
        linkedin: "",
        portfolio: "",
        coverLetter: "",
        referral: "",
      });
    } catch (err) {
      setError((err as Error).message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Breadcrumb / Back link */}
      <div className="w-full max-w-6xl px-4 mt-8 mb-2">
        <Link href="/careers" className="flex items-center text-muted-foreground hover:text-foreground text-sm mb-4">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to “Open Positions”
        </Link>
      </div>

      {/* Job Title Section */}
      <section className="w-full max-w-6xl px-4">
        <MagicCard className="p-6 md:p-8 rounded-2xl border border-border bg-background mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{job.title}</h1>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-1">
                <span><strong>Department:</strong> {job.department}</span>
                <span>• <strong>Location:</strong> {job.location}</span>
                <span>• <strong>Type:</strong> {job.employment}</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                <strong>Brief Job Summary:</strong> {job.summary}
              </div>
            </div>
            <Badge className="self-start md:self-center">Now Hiring</Badge>
          </div>
        </MagicCard>
      </section>

      {/* Tabs (Overview | Application) */}
      <section className="w-full max-w-6xl px-4 mb-8">
        <div className="flex gap-2 border-b border-border mb-4">
          <div className="px-4 py-2 border-b-2 border-primary font-semibold text-primary cursor-pointer">Application</div>
          <div className="px-4 py-2 text-muted-foreground cursor-not-allowed">Overview</div>
        </div>
      </section>

      {/* Main Content: Side Info + Form */}
      <section className="w-full max-w-6xl px-4 flex flex-col md:flex-row gap-8">
        {/* Side Info (left column) */}
        <aside className="hidden md:block md:w-1/3">
          <MagicCard className="p-6 rounded-2xl border border-border bg-background mb-8">
            <div className="space-y-3 text-sm">
              <div>📍 <strong>Location:</strong> {job.location}</div>
              <div>🕓 <strong>Employment Type:</strong> {job.employment}</div>
              <div>🗂️ <strong>Department:</strong> {job.department}</div>
              <div>💰 <strong>Salary Range:</strong> {job.salary || "Competitive compensation"}</div>
            </div>
          </MagicCard>
        </aside>

        {/* Application Form (right/main column) */}
        <main className="w-full md:w-2/3">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Button type="button" variant="outline" onClick={handleAutofill} className="w-full md:w-auto">Autofill from resume</Button>
              <label className="block text-xs text-muted-foreground">Fields with * are required</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Name*</label>
                <Input name="name" required value={form.name} onChange={handleChange} autoComplete="name" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email*</label>
                <Input name="email" type="email" required value={form.email} onChange={handleChange} autoComplete="email" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Resume*</label>
              <Input name="resume" type="file" required accept=".pdf,.doc,.docx" onChange={handleChange} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">LinkedIn Profile</label>
                <Input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/yourprofile" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Portfolio / GitHub</label>
                <Input name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://github.com/yourprofile" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Cover Letter</label>
              <Textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} rows={4} placeholder="Tell us why you're a great fit..." />
            </div>
            <div>
              <label className="block mb-1 font-medium">Referral Code</label>
              <Input name="referral" value={form.referral} onChange={handleChange} placeholder="(optional)" />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {success && (
              <div className="space-y-4">
                <div className="text-green-600 text-sm">Application submitted successfully!</div>
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
            <Button type="submit" size="lg" className="w-full md:w-auto" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>

          {/* CTA Banner below form */}
          <div className="mt-12">
            <MagicCard className="p-6 rounded-2xl border border-border bg-background flex flex-col items-center text-center">
              <div className="text-lg font-semibold mb-2">Can’t find the right role?</div>
              <div className="mb-4 text-sm text-muted-foreground">Submit your resume and we’ll reach out when relevant roles open</div>
              <Button variant="outline" asChild>
                <Link href="/careers/apply/general">Submit General Application</Link>
              </Button>
            </MagicCard>
          </div>
        </main>
      </section>
    </div>
  );
} 