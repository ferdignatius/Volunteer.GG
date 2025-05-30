export default interface ItemAttributes {
  id: number;
  name: string;
  description?: string | null;
  img_url?: string | null;
  type: string;
  money_price: number;  // or use `string` if you prefer to handle it as a string in the database
  point_price: number;
  count: number;
  existed_until: Date;
  createdAt?: Date;
  updatedAt?: Date;
}