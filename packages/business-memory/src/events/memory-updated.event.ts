import { MemoryId } from '../identity/memory-id.js';

export interface MemoryUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly memoryId: MemoryId;
  readonly previousVersion: number;
  readonly newVersion: number;
  readonly updatedFields: string[];
  readonly updatedBy: string;
  readonly timestamp: Date;
}
