import { ProcessId } from '../identity/process-id.js';

export interface ProcessRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredProcessId: ProcessId;
  readonly uniqueProcessCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
