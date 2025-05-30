export default interface ChatAttributes {
  id: number;
  user1_id: number;
  user2_id: number;
  chat: string;
  datetime: Date;
  createdAt?: Date;
  updatedAt?: Date;
}