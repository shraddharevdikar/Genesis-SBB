import { MemoryId } from '../identity/memory-id.js';

export interface MemoryArchivedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly memoryId: MemoryId;
  readonly archivedBy: string;
  readonly reason?: string;
  readonly timestamp: Date;
}
