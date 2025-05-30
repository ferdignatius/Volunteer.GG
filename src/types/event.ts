export default interface EventAttributes {
  id: number;
  name: string;
  location: string;
  base_points: number;
  final_points: number;
  description?: string;
  start_datetime: Date;
  end_datetime: Date;
  certificate_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
}