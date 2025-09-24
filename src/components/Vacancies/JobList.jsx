

"use client";

import { useState } from "react";
import JobCategories from "./JobCategories";
import JobCard from "./JobCard";
import { vacancyCategories } from "./vacancyCategories";

const JOBS = [
  {
    id: 1,
    title: "Software Developer",
    type: "Full time",
    duration: "1–5 day",
    desc: "If you have programming skills and want to work on creating innovative products, we welcome you to our team.",
    category: "Development",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full time",
    duration: "1–5 day",
    desc: "We’re looking for creative designers to craft user-friendly interfaces.",
    category: "Design",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    type: "Full time",
    duration: "1–5 day",
    desc: "Join our marketing team to create strategies that reach thousands.",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Finance Analyst",
    type: "Full time",
    duration: "1–5 day",
    desc: "Help us analyze financial data and provide insights for better decision-making.",
    category: "Finance",
  },
  {
    id: 5,
    title: "Project Manager",
    type: "Full time",
    duration: "1–5 day",
    desc: "Lead teams and ensure projects are delivered on time and within scope.",
    category: "Management",
  },
];

export default function JobList() {
  const [activeCategory, setActiveCategory] = useState("View all");

  const filteredJobs =
    activeCategory === "View all"
      ? JOBS
      : JOBS.filter((job) => job.category === activeCategory);

  return (
    <section className="py-16">
      <JobCategories
        categories={vacancyCategories}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

