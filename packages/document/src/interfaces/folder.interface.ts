export interface IFolder {
  id: string;
  name: string;
  parentId?: string | null;
  tenantId: string;
  organizationId: string;
  ownerId: string;
  createdBy: string;
  isFavorite: boolean;
  isDeleted: boolean;
  deletedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
