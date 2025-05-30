import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '@/lib/api/fetchEvents';

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 1000 * 60, // 1 minute
    // cacheTime: 1000 * 60 * 5, // 5 minutes
  })
}