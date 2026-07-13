import { MemoryRequest } from '../core/memory-request.js';

export interface MemoryRequestedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly request: MemoryRequest;
  readonly timestamp: Date;
}
