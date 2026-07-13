import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';

export interface WorkflowContext {
  readonly workflowId: WorkflowId;
  readonly instanceId: WorkflowInstanceId;
  readonly tenantId: string;
  readonly initiatorRoleId: string;
  readonly variables: Record<string, any>;
  readonly parentInstanceId?: WorkflowInstanceId;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
