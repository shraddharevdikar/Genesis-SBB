import { MemoryResponse } from '../core/memory-response.js';

export interface MemoryReturnedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly response: MemoryResponse;
  readonly timestamp: Date;
}
