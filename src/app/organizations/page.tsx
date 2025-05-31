"use client"
import React, { useEffect, useState } from 'react';
import EventSearchbar from '../../components/SearchBar'
// import EventSidebarFilter from '../../components/EventSidebarFilter'
import { events_api_result } from '../../dummies/dummy_data_frontend'
import { EventAttributes, EventCategoryAttributes, EventImageAttributes } from '@/types'
import { useEvents } from '@/hooks/useEvents';


import { ErrorBox, EventCarousel, SearchBar, EventCardSmall, Footer} from '@/components'
import OrganizationCard from '@/components/OrganizationCard';


const Organizations = () => {

  const porscheLogo = '/assets/porsche-logo.png';
  const heroBackgroundImage = '/assets/heroBackgroundImage.png'
  // Dummy data for the cards (replace with real data from an API or prop)
  const organizations = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    organizationName: 'Organization Name', // Placeholder for actual name
    rating: '4.2/5.0',
    eventsHosted: 102,
    generalCredibility: 'Good',
    description:
      'Lorem Ipsum Dolorem Lorem Ipsum Dolores Lorem Ipsum Dolorem Lorem Ipsum Dolores Lorem Ipsum Dolorem Lorem Ipsum Dolores Lorem Ipsum Dolorem Lorem Ipsum Dolores Lorem Ipsum Dolorem Lorem Ipsum Dolores Lorem Ipsum Dolorem Lorem Ipsum Dolores Lorem Ipsum Dolorem Lorem Ipsum Dolores ...',
    logoSrc: porscheLogo, // Make sure you have this image in your public folder
  }));

//   const { data: events, isLoading, isError, error } = useEvents()
//   const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
//   const [search, setSearch] = useState<string>('')
  
//   useEffect(() => {
//     if (events && events.length > 0) {
//       setFilteredEvents(events)
//     }
//   }, [events])

//   const handleSearch = (search : string) => {
//     setSearch(search)
//     const filteredEvents = events.filter((event : Event) => event.name.toLowerCase().includes(search.toLowerCase()))
//     setFilteredEvents(filteredEvents)
//   }

//   if(isLoading){
//     return <div className="w-full h-full">Loading...</div>
//   }

//   if(isError){
//     return <ErrorBox error={error as any}/>
//   }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white text-white py-10 px-5 text-center border-b-4 bg-opacity-50" style={{backgroundImage: `url(${heroBackgroundImage})`}}>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Organizations</h1>
      <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        Connect, Contribute and Grow.
        <br />
        be part of a purpose-driven community, develop your skills, and make a meaningful impact - one initiative at a time
      </p>
    </div>

      <div className="flex justify-center p-5 bg-gray-100 border-b border-gray-300">
      <input
        type="text"
        placeholder="Search anything you want ..."
        className="w-full max-w-2xl p-3 border border-gray-300 rounded-full text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button className="ml-3 p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
        {/* SVG for search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>

      <main className="flex-grow p-5 flex justify-center">
        <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
          {organizations.map((org) => (
            <OrganizationCard
              key={org.id}
              organizationName={org.organizationName}
              rating={org.rating}
              eventsHosted={org.eventsHosted}
              generalCredibility={org.generalCredibility}
              description={org.description}
              logoSrc={org.logoSrc}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Organizations