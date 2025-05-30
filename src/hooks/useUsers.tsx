import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '@/lib/api/fetchUsers';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60, // 1 minute
    // cacheTime: 1000 * 60 * 5, // 5 minutes
  })
}