export interface IRole {
  id: string;
  organizationId: string;
  name: string;
  description?: string | null;
  deletedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
