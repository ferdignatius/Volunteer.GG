"use client";

import { useState } from "react";

const CalendarIcon = () => <span>📅</span>;
const LocationIcon = () => <span>📍</span>;
const CompanyIcon = () => <span>🏢</span>;
const PointsIcon = () => <span>⭐</span>;
const PeopleIcon = () => <span>👥</span>;
const StarIcon = ({ filled }) => (
  <span className={filled ? "text-yellow-400" : "text-gray-300"}>★</span>
);
const PlusIcon = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full font-bold text-gray-600 text-lg flex-shrink-0">
    +
  </span>
)

const EventDetailPage = () => {
  const [isJoined, setIsJoined] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={i <= rating} />);
    }
    return stars;
  };

  const eventHosts = [
    "https://via.placeholder.com/40/FF0000/FFFFFF?Text=Host1",
    "https://via.placeholder.com/40/00FF00/FFFFFF?Text=Host2",
    "https://via.placeholder.com/40/0000FF/FFFFFF?Text=Host3",
    "https://via.placeholder.com/40/FFFF00/000000?Text=Host4",
  ];

  const handleJoinClick = () => {
    setIsJoined(true);
  };

  return (
    <div className="flex font-sans text-gray-800 bg-gray-100 p-5 gap-5">
      {/* Main content */}
      <div className="flex-2 flex flex-col gap-5">
        {/* Header Image */}
        <div className="w-full h-[300px] overflow-hidden rounded-lg">
          <img
            src="https://via.placeholder.com/800x300?text=Beach+Event+Header"
            alt="Event Header"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Company Info Card */}
        <div className="bg-white p-5 rounded-lg shadow flex gap-5 items-start relative">
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/80/000000/FFFFFF?Text=Logo"
              alt="Company Logo"
              className="w-20 h-20 rounded-lg object-cover border border-gray-200"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl text-blue-900 mb-2">Lorem Ipsum Company</h2>
            <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-2">
              <div className="flex items-center gap-1">
                <div className="flex">{renderStars(4)}</div> 4.2/5.0
              </div>
              <div>
                Events Hosted: <strong>102</strong>
              </div>
              <div>
                General Credibility:{" "}
                <span className="text-green-600 font-semibold">Good</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
              <span>Current Event Hosts:</span>
              <div className="flex items-center">
                {eventHosts.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Host ${index + 1}`}
                    className={`w-7 h-7 rounded-full border-2 border-white object-cover ${
                      index !== 0 ? "-ml-2" : ""
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-2">and 5+ more</span>
              </div>
            </div>
          </div>
          <a
            href="#seemore"
            className="absolute bottom-4 right-5 text-sm text-blue-600 hover:underline"
          >
            See more about Us ...
          </a>
        </div>

        {/* Descriptions About the Event */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-xl text-blue-900 mb-3">Descriptions About the Event</h3>
          <p className="text-gray-600 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vestibulum nec justo at felis vestibulum volutpat.
            Curabitur tincidunt, ligula ut hendrerit posuere, metus elit
            hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et
            ex pharetra scelerisque. Suspendisse potenti. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec
            justo at felis vestibulum volutpat. Curabitur tincidunt, ligula ut
            hendrerit posuere, metus elit hendrerit elit, eget luctus quam
            velit at nulla. Proin vel justo et ex pharetra scelerisque.
            Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla facilisi. Vestibulum nec justo at felis
            vestibulum volutpat. Curabitur tincidunt, ligula ut hendrerit
            posuere, metus elit hendrerit elit, eget luctus quam velit at
            nulla. Proin vel justo et ex pharetra scelerisque. Suspendisse
            potenti.
          </p>
        </div>

        {/* Reviews Section */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-xl text-blue-900 mb-4">Reviews</h3>

          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 border border-gray-200 rounded-md mb-3 bg-gray-50"
            >
              <PlusIcon />
              <p className="text-gray-700 text-sm leading-relaxed">
                Nulla facilisi. Vestibulum nec justo at felis vestibulum
                volutpat. Curabitur tincidunt, ligula ut hendrerit posuere,
                metus elit hendrerit elit, eget luctus quam velit at nulla.
                Proin vel justo et ex pharetra scelerisque. Suspendi...
              </p>
            </div>
          ))}

          <a
            href="#seeMoreReviews"
            className="block text-right mt-2 text-sm text-blue-600 hover:underline"
          >
            See more reviews...
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex-1 bg-white p-5 rounded-lg shadow max-h-fit flex flex-col gap-3">
        <h1 className="text-xl text-blue-900 mb-1">Lorem Ipsum Dolores ...</h1>

        <div className="flex gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-green-600">
            Tag Content
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-blue-600">
            Tag Content
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <CalendarIcon />
          <span>22 Dec 2024, 12:00 - 15:00</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <LocationIcon />
          <span>Jakarta, Indonesia</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <CompanyIcon />
          <span>Lorem Ipsum Company</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <PointsIcon />
          <span>+ 50 points</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <PeopleIcon />
          <span>Friends Joined : None</span>
        </div>

        <div className="mt-3 mb-4">
          <h4 className="text-base font-semibold text-gray-900 mb-1">
            Event Description :
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vestibulum nec justo at felis vestibulum volutpat.
            Curabitur tincidunt, ligula ut hendrerit posuere, metus elit
            hendrerit elit, eget luctus quam velit at nulla. Proin vel justo et
            ex pharetra scelerisque. Suspendisse potenti. Lorem ipsum vel justo
            ...
          </p>
        </div>

        {isJoined ? (
          <button
            disabled
            className="w-full py-3 bg-amber-400 text-gray-900 font-bold rounded-md cursor-not-allowed"
          >
            Registration confirmed. Please arrive on time.
          </button>
        ) : (
          <button
            onClick={handleJoinClick}
            className="w-full py-3 bg-amber-400 text-gray-900 font-bold rounded-md hover:bg-amber-500 transition"
          >
            JOIN HERE
          </button>
        )}

        <button className="w-full py-3 bg-gray-300 text-gray-900 font-bold rounded-md hover:bg-gray-400 transition">
          Contact Organization
        </button>
        <button className="w-full py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition">
          Report This Event
        </button>
      </div>
    </div>
  );
};

export default EventDetailPage