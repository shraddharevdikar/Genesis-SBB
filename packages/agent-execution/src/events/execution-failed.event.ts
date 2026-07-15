import { ExecutionId } from '../identity/execution-id.js';

export interface ExecutionFailedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly executionId: ExecutionId;
  readonly failingStepId?: string;
  readonly errorDetailsText: string;
  readonly wasRollbackTriggered: boolean;
  readonly isRollbackSuccessful?: boolean;
  readonly traceId: string;
  readonly timestamp: Date;
}
