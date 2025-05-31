// components/OrganizationCard.tsx
import React from 'react';
import Image from 'next/image'; // For optimized images in Next.js

interface OrganizationCardProps {
  organizationName: string;
  rating: string;
  eventsHosted: number;
  generalCredibility: string;
  description: string;
  logoSrc: string; // Path to the logo image
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  organizationName,
  rating,
  eventsHosted,
  generalCredibility,
  description,
  logoSrc,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 m-4 shadow-md flex flex-col justify-between w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[300px]">
      <div className="flex items-start mb-4">
        <div className="mr-4 w-12 h-12 flex items-center justify-center">
          <Image src={logoSrc} alt={`${organizationName} Logo`} width={48} height={48} className="rounded-full" />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-1 text-gray-800">{organizationName}</h3>
          <div className="text-sm text-gray-600 mb-1">
            <span className="text-yellow-500">★★★★★</span> {rating}
          </div>
          <p className="text-sm text-gray-700 flex items-center mb-1">
            <span className="text-green-600 font-bold mr-1">✔</span> Events hosted: {eventsHosted}
          </p>
          <p className="text-sm text-gray-700 flex items-center">
            <span className="text-green-600 font-bold mr-1">✔</span> General Credibility: <span className="text-green-600 ml-1 font-medium">{generalCredibility}</span>
          </p>
        </div>
      </div>
      <p className="text-base text-gray-700 leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>
      <div className="flex justify-end gap-3 mt-auto">
        <button className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md text-sm hover:bg-gray-200 transition-colors duration-300">
          See More...
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors duration-300">
          Follow
        </button>
      </div>
    </div>
  );
};

export default OrganizationCard;