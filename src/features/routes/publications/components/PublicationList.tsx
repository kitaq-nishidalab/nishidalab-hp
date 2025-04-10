"use client";

import { useState } from "react";
import Link from "next/link";

type Publication = {
  title: string;
  authors: string[];
  category: string;
  year: number;
  venue: string;
  link?: string;
};

export default function PublicationList({
  publications,
  categories,
  years,
  labelAll,
  labelCategory,
  labelYear,
  categoryLabels,
}: {
  publications: Publication[];
  categories: string[];
  years: number[];
  labelAll: string;
  labelCategory: string;
  labelYear: string;
  categoryLabels: Record<string, string>;
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const filtered = publications.filter((item) => {
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;
    const yearMatch =
      selectedYear === "all" || item.year.toString() === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <label>
          {labelCategory}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 ml-2"
          >
            <option value="all">{labelAll}</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {categoryLabels[cat] || cat}
              </option>
            ))}
          </select>
        </label>

        <label>
          {labelYear}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border px-2 py-1 ml-2"
          >
            <option value="all">{labelAll}</option>
            {years.map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ul className="space-y-3">
        {filtered.map((item, index) => (
          <li key={index} className="border p-3 rounded">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-500">[{item.year}]</span>
              <h2 className="font-semibold text-base">{item.title}</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                {categoryLabels[item.category] || item.category}
              </span>
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm hover:opacity-80"
                >
                  参考リンク
                </Link>
              )}
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-2 flex-wrap mt-1">
              <span>{item.authors.join(", ")}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1 italic">{item.venue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
