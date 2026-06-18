"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <input
        className="border border-gray-100 px-4 py-2 rounded-2xl w-100 focus:outline-none"
        type="text"
        placeholder="Что будем искать?"
        autoFocus
      />

      <button
        className="transition-transform hover:scale-105"
        area-label="Поиск"
      >
        <Search />
      </button>
    </div>
  );
}
