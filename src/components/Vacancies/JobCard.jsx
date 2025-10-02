"use client";

import { MdArrowOutward } from "react-icons/md";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-2">
      <h3 className="text-lg font-semibold mb-3">{job.title}</h3>

      <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
        <span>⏰ {job.type}</span>
        <span>📅 {job.duration}</span>
      </div>

      <p className="text-gray-500 text-sm mb-6">{job.desc}</p>

      <button
        className="group relative flex items-center gap-2 text-white px-5 py-2 rounded-3xl transition-all duration-300 
        bg-[#0F5156] hover:bg-[#37D392] hover:bg-gradient-to-t hover:from-[#37D392] hover:to-transparent"
      >
        <span>Apply</span>
        <span className="flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
          <MdArrowOutward className="text-lg" />
        </span>
      </button>
    </div>
  );
}
