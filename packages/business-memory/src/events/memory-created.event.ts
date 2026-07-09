import { MemoryId } from '../identity/memory-id.js';
import { MemoryType } from '../classification/memory-type.js';
import { MemoryCategory } from '../classification/memory-category.js';

export interface MemoryCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly memoryId: MemoryId;
  readonly title: string;
  readonly type: MemoryType;
  readonly category: MemoryCategory;
  readonly createdBy: string;
  readonly timestamp: Date;
}
