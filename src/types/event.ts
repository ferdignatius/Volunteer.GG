export default interface EventAttributes {
  id: number;
  name: string;
  location: string;
  base_points: number;
  final_points: number;
  description?: string;
  start_datetime: string;
  end_datetime: string;
  certificate_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
}