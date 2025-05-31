"use client";
import React from "react";

interface Props {
  search: string
  handleSearch: (search: string) => void
}

const SearchBar = ({ search, handleSearch }: Props) => {
  return (
    <form className="flex items-center w-full h-12 bg-gray-200 rounded-md overflow-hidden border border-gray-300 shadow-sm">
      <input
        type="text"
        className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-500 text-base bg-transparent border-none outline-none"
        placeholder="Search anything you want ..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div
        aria-label="Search"
        className="flex items-center justify-center px-4 py-2 text-gray-800 transition rounded-full"
      >
        <span className="text-xl">&#x1F50D;</span>
      </div>
    </form>
  );
};

export default SearchBar