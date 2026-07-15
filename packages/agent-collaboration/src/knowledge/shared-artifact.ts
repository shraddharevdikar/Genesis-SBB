import { SharedMemoryReference } from './shared-memory-reference.js';

export interface SharedArtifact {
  readonly artifactId: string;
  readonly scopeCode: string; // e.g. "SBB_MAINTENANCE_LOGS"
  readonly artifactType: string; // e.g. "JSON", "MARKDOWN", "BINARY"
  readonly storageBlobUri: string;
  readonly associatedMemoriesList: SharedMemoryReference[];
  readonly lastModifiedAt: Date;
}
