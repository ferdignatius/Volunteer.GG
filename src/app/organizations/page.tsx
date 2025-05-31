"use client"
import React, { useEffect, useState } from 'react';
import EventCarousel from '../../components/EventCarousel'
import EventSearchbar from '../../components/SearchBar'
// import EventSidebarFilter from '../../components/EventSidebarFilter'
import EventCardSmall from '../../components/EventCardSmall'
import ErrorBox from '../../components/ErrorBox'
import { events_api_result } from '../../dummies/dummy_data_frontend'
import { EventAttributes, EventCategoryAttributes, EventImageAttributes } from '@/types'
import { useEvents } from '@/hooks/useEvents';

const Organizations = () => {

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
    <div className="bg-white px-16 pb-20">
      This is organizations page
    </div>
  )
}

export default Organizations