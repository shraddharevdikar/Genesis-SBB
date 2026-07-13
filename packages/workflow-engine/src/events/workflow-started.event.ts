import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';
import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: WorkflowInstanceId;
  readonly workflowId: WorkflowId;
  readonly startedByRoleId: string;
  readonly timestamp: Date;
}
