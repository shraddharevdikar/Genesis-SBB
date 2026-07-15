export interface AttachmentReference {
  readonly attachmentId: string;
  readonly originalFileName: string;
  readonly mimeType: string;
  readonly storageBlobUri: string; // Path inside SBB's secure blob store (never public)
  readonly sizeBytes: number;
  readonly virusScanStatus: 'PENDING' | 'CLEAN' | 'INFECTED';
  readonly hashSha256: string;
}
