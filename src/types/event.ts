import { Category } from './category'

export interface Event {
  id: string
  name: string
  base_points: number
  final_points: number
  photos: string[]
  categories: Category[]
  description: string
  start_datetime: string
  end_datetime: string
  location: string
  organization_name: string
  friend_count?: number
}