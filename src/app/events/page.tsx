"use client"
import React, { useEffect, useState } from 'react';
import EventCarousel from '../../components/event_carousel'
import EventSearchbar from '../../components/event_searchbar'
// import EventSidebarFilter from '../../components/EventSidebarFilter'
import EventCardSmall from '../../components/eventcard_small'
import ErrorBox from '../../components/errorbox'
import { events_api_result } from '../../dummies/dummy_data_frontend'
import { Event } from '../../types/event'
import { useEvents } from '@/hooks/useEvents';

const Events = () => {

  const { data: events, isLoading, isError, error } = useEvents()
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [search, setSearch] = useState<string>('')
  
  useEffect(() => {
    if (events && events.length > 0) {
      setFilteredEvents(events)
    }
  }, [events])

  const handleSearch = (search : string) => {
    setSearch(search)
    const filteredEvents = events.filter((event : Event) => event.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredEvents(filteredEvents)
  }

  if(isLoading){
    return <div className="w-full h-full">Loading...</div>
  }

  if(isError){
    return <ErrorBox error={error as any}/>
  }

  return (
    <div className="bg-white px-16 pb-20">
      <section className="w-full mb-8 h-[350px]">
        <EventCarousel events={events} />
      </section>
      <section className="w-full flex flex-row gap-4">
        {/* <aside className="flex-none w-72">
          <EventSidebarFilter category={category} setCategories={setCategories} filters={filters} setFilters={setFilters}/>
        </aside> */}
        <div className="flex-grow flex flex-col gap-6">
          <EventSearchbar search={search} handleSearch={handleSearch}/>
          {(!events || events.length <= 0) &&
            <div className="flex min-h-72 flex justify-center items-center bg-gray-100 rounded-lg">No event existed yet...</div>
          }
          {(!filteredEvents || filteredEvents.length <= 0) &&
            <div className="flex min-h-72 flex justify-center items-center bg-gray-100 rounded-lg">No event meet the searched requirements</div>
          }
          {filteredEvents.length > 0 &&
          <main className="w-128 flex grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredEvents.map(event => (
              <EventCardSmall key={event.id} event={event}/>
            ))}
          </main>
          }
        </div>
      </section>
    </div>
  )
}

export default Events