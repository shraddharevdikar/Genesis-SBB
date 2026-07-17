import { ProcessId } from '../identity/process-id.js';

export interface ProcessContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly initiatorParticipantId: string;
  readonly activeProcessId?: ProcessId;
  readonly timestamp: Date;
}
