import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';
import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: WorkflowInstanceId;
  readonly workflowId: WorkflowId;
  readonly durationMs: number;
  readonly completedByRoleId: string;
  readonly timestamp: Date;
}
