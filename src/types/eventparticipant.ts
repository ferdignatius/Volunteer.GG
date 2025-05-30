export default interface EventParticipantAttributes {
  id: number;
  user_id: number;
  event_id: number;
  status: string;
  is_verified?: string | null;
  proof_url?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}