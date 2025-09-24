"use client";

import Container from "@/components/layout/Container";
import PageBanner from "@/components/PageBanner/PageBanner";
import JobList from "@/components/vacancies/JobList";

export default function VacanciesPage() {
  return (
    <Container>
      {/* Banner */}
      <div className="relative w-full mb-16 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-5">
        <PageBanner bgImage="/assets/Pagebanner/page-banner.png" />
      </div>

      {/* Job List */}
      <JobList />
    </Container>
  );
}
