import { AttachmentReference } from './attachment-reference.js';

export interface BusinessArtifact {
  readonly artifactId: string;
  readonly scopeCode: string; // e.g., "SBB_TICKET_VOIDS" or "SBB_CREW_ASSIGNMENTS"
  readonly contextKey: string;
  readonly attachmentReference?: AttachmentReference;
  readonly structuralDataPayloadJson?: string;
  readonly lastModifiedAt: Date;
}
