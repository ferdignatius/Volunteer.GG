"use client";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2">
        🔍
      </button>
    </div>
  );
}