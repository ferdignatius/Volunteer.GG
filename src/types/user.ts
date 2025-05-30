export default interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  bio: string;
  city: string;
  province: string;
  country: string;
  total_points: number;
  monthly_points: number;
  usable_points: number;
  status: string;
  dob?: string;
  gender?: string;
  img_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
}