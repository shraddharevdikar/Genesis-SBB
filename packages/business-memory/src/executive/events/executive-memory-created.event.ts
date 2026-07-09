import { ExecutiveMemoryId } from '../identity/executive-memory-id.js';
import { ExecutiveOwner } from '../identity/executive-owner.js';

export interface ExecutiveMemoryCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly executiveMemoryId: ExecutiveMemoryId;
  readonly owner: ExecutiveOwner;
  readonly timestamp: Date;
}
