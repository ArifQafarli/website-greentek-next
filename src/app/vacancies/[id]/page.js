"use client";

import Container from "@/components/layout/Container";
import PageBanner from "@/components/PageBanner/PageBanner";
import JobDetail from "@/components/vacancies/JobDetail";

export default function VacancyDetailPage({ params }) {
  const { id } = params;

  const job = {
    id,
    title: "Software Developer",
    overview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    responsibilities: [
      "Design, Develop, Test, And Maintain Software Applications.",
      "Write Clean, Efficient, And Well-Documented Code.",
      "Collaborate With Cross-Functional Teams To Define And Deliver Solutions.",
    ],
    qualifications: [
      "Bachelor's Degree In Computer Science",
      "2+ Years Of Experience In Software Development",
      "Proficiency In JavaScript, React, NodeJs",
    ],
    
  };

  return (
    <Container>
      {/* Page Banner */}
      <div className="relative w-full mb-16 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-5">
        <PageBanner bgImage="/assets/Pagebanner/page-banner.png" />
      </div>

      {/* Job Detail Section */}
      <JobDetail job={job} />
    </Container>
  );
}
