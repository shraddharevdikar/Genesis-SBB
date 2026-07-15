import { ExecutionId } from '../identity/execution-id.js';

export interface CheckpointCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly executionId: ExecutionId;
  readonly completedStepId: string;
  readonly checkpointId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
