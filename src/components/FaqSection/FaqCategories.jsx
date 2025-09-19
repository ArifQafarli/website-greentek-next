"use client";

import { useState } from "react";

export default function FaqCategories({ className = "" }) {
  const [active, setActive] = useState("All");
  const categories = [
    "All",
    "Payments",
    "Global Transaction",
    "Registrations with Sima",
    "Services",
  ];

  return (
    <aside
      className={`bg-white rounded-3xl px-6 py-6 flex flex-col ${className}`}
    >
      <ul className="flex flex-col gap-3 flex-1">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setActive(cat)}
              className={`inline-block px-6 py-3 rounded-xl font-medium text-left transition
              ${
                active === cat
                  ? "bg-emerald-800 text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
