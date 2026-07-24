import { IDocumentMetadata } from './metadata.interface.js';

export interface IDocument {
  id: string;
  name: string;
  originalName: string;
  contentType: string;
  extension: string;
  size: number;
  checksum: string;
  folderId?: string | null;
  tenantId: string;
  organizationId: string;
  ownerId: string;
  createdBy: string;
  modifiedBy: string;
  tags?: string[];
  category?: string | null;
  retentionPolicy?: string | null;
  aiProcessingStatus: string;
  storageProvider: string;
  storageKey: string;
  isFavorite: boolean;
  isDeleted: boolean;
  deletedAt?: Date | null;
  deletedBy?: string | null;
  createdAt: Date;
  updatedAt: Date;
  metadata?: IDocumentMetadata | null;
}
