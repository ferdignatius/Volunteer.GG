"use client";
import SearchBar from "@/components/SearchBar";

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#FFF3E9]">
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar placeholder="Search anything you want" />
        </div>

        {/* Special Items Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Special Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 shadow">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-center">Item Name</h3>
                <div className="text-center bg-[#FFE0CC] rounded-full py-1 mt-2">
                  XXXX points
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Normal Items Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Normal Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 shadow">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-center">Item Name</h3>
                <div className="flex justify-center gap-2 mt-2">
                  <button className="bg-[#FFE0CC] px-3 py-1 rounded-full text-sm">
                    XXXX points
                  </button>
                  <button className="bg-[#FFE0CC] px-3 py-1 rounded-full text-sm">
                    Rp. XXXX
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Paid Items Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">Paid Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 shadow">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-center">Item Name</h3>
                <div className="text-center bg-[#FFE0CC] rounded-full py-1 mt-2">
                  Rp. XXXX
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}