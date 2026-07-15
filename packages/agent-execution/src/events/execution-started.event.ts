import { ExecutionId } from '../identity/execution-id.js';

export interface ExecutionStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly executionId: ExecutionId;
  readonly approvedPlanId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
