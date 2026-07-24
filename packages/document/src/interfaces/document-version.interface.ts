export interface IDocumentVersion {
  id: string;
  documentId: string;
  versionNumber: number;
  size: number;
  checksum: string;
  storageKey: string;
  storageProvider: string;
  comment?: string | null;
  createdBy: string;
  createdAt: Date;
}
