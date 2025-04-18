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
      <div className="flex gap-4 items-center text-xs">
        <label>
          {labelCategory}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-1 ml-2 w-24"
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
            className="border p-1 ml-2 w-24"
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
          <li key={index} className="border p-4 rounded">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gray-700">{item.year}</span>
                <span className="bg-blue-800 text-white text-xs px-3 py-1">
                  {categoryLabels[item.category] || item.category}
                </span>
              </div>
              <h2 className="font-semibold md:text-lg">{item.title}</h2>
              <div className="gap-0 text-xs">
                <div className="text-gray-700 flex items-center gap-2 flex-wrap">
                  <span>{item.authors.join(",  ")}</span>
                </div>
                <p className="text-gray-700">{item.venue}</p>
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-blue-600 underline hover:opacity-80"
                  >
                    参考リンク
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
