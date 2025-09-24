"use client";

export default function JobCategories({ categories, active, setActive }) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-5 py-2 rounded-full border transition ${
            active === cat
              ? "bg-[#0F5156] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
