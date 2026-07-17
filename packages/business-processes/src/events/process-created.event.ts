import { ProcessId } from '../identity/process-id.js';

export interface ProcessCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly processId: ProcessId;
  readonly uniqueProcessCode: string;
  readonly domainCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
