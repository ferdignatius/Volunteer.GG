"use client"
import React, { useEffect, useState } from 'react';
import EventCarousel from '../../components/event_carousel'
import EventSearchbar from '../../components/event_searchbar'
import EventSidebarFilter from '../../components/EventSidebarFilter'
import EventCardSmall from '../../components/eventcard_small'
import ErrorBox from '../../components/errorbox'
import { events_api_result } from '../../dummy_data_frontend'
import { Event } from '../../types/event'
import { Error } from '../../types/error'
import axios from 'axios'

const Events = () => {

  const [events, setEvents] = useState<Event[]>([])
  // const [category, setCategories] = useState<string[]>([])
  // const [filters, setFilters] = useState<{
  //   categories: string[]
  //   search: string
  // }>({
  //   categories: [],
  //   search: '',
  // })
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])

  const handleSearch = (search : string) => {
    setSearch(search)
    const filteredEvents = events.filter((event) => event.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredEvents(filteredEvents)
  }

  useEffect(() => {
    if(process.env.NODE_ENV !== "development"){
      const fetchEvents = async () => {
        try {
          setLoading(true)
          const response = await axios.get('/api/events', {
            withCredentials: true
          })
          setEvents(response.data.events)
          setFilteredEvents(response.data.events)
        }catch(err: any) {
          setError(err.response?.data?.error || err.message || 'Failed to fetch events');
        }finally{
          setLoading(false)
        }
      }
      fetchEvents()
    }else{
      setEvents(events_api_result)
      setFilteredEvents(events_api_result)
    }
  }, [])

  if(loading){
    return <div className="w-full h-full">Loading...</div>
  }

  if(error){
    return <ErrorBox error={error}/>
  }

  return (
    <div className="bg-white px-16">
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
            <div className="flex min-h-72 flex justify-center items-center bg-gray-300">No event existed yet...</div>
          }
          {(!filteredEvents || filteredEvents.length <= 0) &&
            <div className="flex min-h-72 flex justify-center items-center bg-gray-300">No event meet the searched requirements</div>
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