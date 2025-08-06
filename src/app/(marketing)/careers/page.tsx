"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Container from "@/components/global/container";
import { MagicCard } from "@/components/ui/magic-card";
import Link from "next/link";
import { Search } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const JOBS = [
  {
    id: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    employment: "Full-time",
    experience: "3+ yrs exp",
    mode: "Remote",
    salary: "₹10L–₹15L",
    link: "/careers/apply/senior-frontend-engineer",
  },
  {
    id: "ai-solutions-architect",
    title: "AI Solutions Architect",
    department: "AI/ML",
    location: "Bengaluru, India",
    employment: "Full-time",
    experience: "5+ yrs exp",
    mode: "On-site",
    salary: "₹12L–₹18L",
    link: "/careers/apply/ai-solutions-architect",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    employment: "Contract",
    experience: "2+ yrs exp",
    mode: "Remote",
    salary: "₹8L–₹12L",
    link: "/careers/apply/product-designer",
  },
  // Add more jobs as needed
];

const DEPARTMENTS = ["All Departments", "Engineering", "AI/ML", "Design"];
const LOCATIONS = ["All Locations", "Remote", "Bengaluru, India"];
const EMPLOYMENTS = ["All Types", "Full-time", "Part-time", "Contract"];

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [employment, setEmployment] = useState(EMPLOYMENTS[0]);

  const clearFilters = () => {
    setSearch("");
    setDepartment(DEPARTMENTS[0]);
    setLocation(LOCATIONS[0]);
    setEmployment(EMPLOYMENTS[0]);
  };

  const filteredJobs = JOBS.filter((job) => {
    return (
      (search === "" || job.title.toLowerCase().includes(search.toLowerCase())) &&
      (department === DEPARTMENTS[0] || job.department === department) &&
      (location === LOCATIONS[0] || job.location === location) &&
      (employment === EMPLOYMENTS[0] || job.employment === employment)
    );
  });

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full py-10">
        <Container className="py-20 max-w-6xl mx-auto">
          <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
            <div
              className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)",
              }}
            />
            <Badge className="mb-4" variant="default">
              Now Hiring
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug max-w-4xl mx-auto">
              Join the 7gence Team
            </h1>
            <p className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-6">
              Build cutting-edge automation & web solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button size="lg">See Open Positions</Button>
              <Button variant="outline" size="lg">
                Why Work With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Spotlight / Why 7gence? */}
      <section className="w-full max-w-6xl px-4 py-20 mt-20">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug text-center mb-10">
          Why 7gence?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MagicCard
            gradientFrom="#38bdf8"
            gradientTo="#3b82f6"
            gradientColor="rgba(59,130,246,0.1)"
            className="p-8 rounded-2xl border border-border bg-background"
          >
            <div className="text-3xl mb-4">🚀</div>
            <h4 className="text-lg font-semibold mb-2">Innovative Projects</h4>
            <p className="text-sm text-muted-foreground">
              Work with AI at scale
            </p>
          </MagicCard>
          <MagicCard
            gradientFrom="#a855f7"
            gradientTo="#3b82f6"
            gradientColor="rgba(168,85,247,0.1)"
            className="p-8 rounded-2xl border border-border bg-background"
          >
            <div className="text-3xl mb-4">🎓</div>
            <h4 className="text-lg font-semibold mb-2">Growth & Learning</h4>
            <p className="text-sm text-muted-foreground">
              Training & mentoring
            </p>
          </MagicCard>
          <MagicCard
            gradientFrom="#06b6d4"
            gradientTo="#3b82f6"
            gradientColor="rgba(6,182,212,0.1)"
            className="p-8 rounded-2xl border border-border bg-background"
          >
            <div className="text-3xl mb-4">🌐</div>
            <h4 className="text-lg font-semibold mb-2">Flexible Culture</h4>
            <p className="text-sm text-muted-foreground">
              Remote-friendly
            </p>
          </MagicCard>
        </div>
      </section>


      {/* Filters/Search Bar */}
      <section className="w-full max-w-6xl px-4 mt-8">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug text-center mb-10">
          Open Positions
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 bg-background/80 border border-border rounded-2xl p-4 shadow-sm">
          <div className="flex items-center w-full md:w-auto gap-2 flex-1">
            <Search className="text-muted-foreground" />
            <Input
              placeholder="Search roles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-48"
            />
          </div>
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue>{department}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {DEPARTMENTS.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue>{location}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {LOCATIONS.map((l) => (
                <SelectItem key={l} value={l}>
                  {l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={employment} onValueChange={setEmployment}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue>{employment}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {EMPLOYMENTS.map((e) => (
                <SelectItem key={e} value={e}>
                  {e}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="ghost" onClick={clearFilters} className="whitespace-nowrap">
            Clear All
          </Button>
        </div>
      </section>
      
      
      {/* Open Positions Grid/List */}
      <section className="w-full max-w-6xl px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.length === 0 ? (
            <div className="col-span-full text-center text-muted-foreground py-12">
              No positions found.
            </div>
          ) : (
            filteredJobs.map((job, idx) => (
              <MagicCard
                key={job.title + idx}
                gradientFrom="#38bdf8"
                gradientTo="#3b82f6"
                gradientColor="rgba(59,130,246,0.1)"
                className="relative p-6 rounded-2xl border border-border bg-card flex flex-col justify-between h-full overflow-hidden"
              >
                <BackgroundBeams className="absolute inset-0 z-0" />
                <div className="relative z-10">
                  <Link href={job.link} className="hover:underline">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {job.title}
                    </h3>
                  </Link>
                  <div className="text-sm text-muted-foreground mb-2">
                    {job.department} • {job.location} • {job.employment}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-accent-foreground/80 mb-2">
                    <span>{job.experience}</span>
                    <span>• {job.mode}</span>
                  </div>
                  <div className="text-sm font-medium text-primary mb-4">
                    Salary: {job.salary}
                  </div>
                  <Button size="sm" className="mt-2 self-start" asChild>
                    <Link href={job.link}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </MagicCard>
            ))
          )}
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="w-full max-w-3xl mx-auto px-4 mt-20 mb-16">
        <div className="rounded-2xl border border-border bg-background/80 p-8 flex flex-col items-center text-center shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            Can’t find the right role? Submit your resume instead.
          </h3>
          <Button size="lg" className="mt-4">
            Submit CV
          </Button>
        </div>
      </section>
    </div>
  );
} 