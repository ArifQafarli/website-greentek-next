"use client";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-transform transform hover:translate-y-[-10px]">
      <h3 className="text-lg font-semibold mb-3">{job.title}</h3>

      <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
        <span>⏰ {job.type}</span>
        <span>📅 {job.duration}</span>
      </div>

      <p className="text-gray-500 text-sm mb-6">{job.desc}</p>

      <button
        className="flex items-center gap-2 text-white px-4 py-2 rounded-3xl transition-all duration-500 
        bg-[#0F5156] hover:bg-[#37D392] hover:bg-gradient-to-t hover:from-[#37D392] hover:to-transparent"
      >
        Apply →
      </button>
    </div>
  );
}
