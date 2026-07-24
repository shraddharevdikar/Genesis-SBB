export interface IDocumentMetadata {
  filename: string;
  originalFilename: string;
  contentType: string;
  extension: string;
  size: number;
  checksum: string;
  owner: string;
  createdBy: string;
  modifiedBy: string;
  tags?: string[];
  category?: string | null;
  retentionPolicy?: string | null;
  aiProcessingStatus?: string;
  customProperties?: Record<string, any>;
  dimensions?: { width: number; height: number };
  pageCount?: number;
  wordCount?: number;
}
