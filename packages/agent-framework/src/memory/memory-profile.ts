import { MemoryAccessPolicy } from './memory-access-policy.js';

export interface MemoryProfile {
  readonly profileId: string;
  readonly agentId: string;
  readonly shortTermBufferLimit: number; // e.g., max conversation state window limits
  readonly enableLongTermVectorSync: boolean;
  readonly vectorNamespace?: string;
  readonly defaultAccessPolicy: MemoryAccessPolicy;
  readonly metadataSchemaName?: string;
}
