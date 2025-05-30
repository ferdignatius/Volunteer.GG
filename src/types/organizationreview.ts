export default interface OrganizationReviewAttributes {
  id: number;
  user_id: number;
  organization_id: number;
  review: string;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
}