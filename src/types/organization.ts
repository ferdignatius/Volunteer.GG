export default interface OrganizationAttributes {
  id: number;
  name: string;
  description?: string | null;
  avg_rating?: number | null;
  credibility?: string | null;
  logo_url?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

// export interface OrganizationCreationAttributes extends Omit<OrganizationAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
