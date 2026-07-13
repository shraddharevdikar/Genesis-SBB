import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';
import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowCancelledEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: WorkflowInstanceId;
  readonly workflowId: WorkflowId;
  readonly reason: string;
  readonly cancelledByRoleId: string;
  readonly timestamp: Date;
}
