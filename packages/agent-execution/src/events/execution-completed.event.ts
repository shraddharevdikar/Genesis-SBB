import { ExecutionId } from '../identity/execution-id.js';

export interface ExecutionCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly executionId: ExecutionId;
  readonly finalStatus: 'SUCCESS';
  readonly executionPerformanceDurationMs: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
