export default interface OrganizationMemberAttributes {
  user_id: number;
  organization_id: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}