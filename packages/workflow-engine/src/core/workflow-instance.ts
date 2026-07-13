import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';
import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowStepId } from '../identity/workflow-step-id.js';

export type WorkflowStatus = 'PENDING' | 'RUNNING' | 'COMPLETED' | 'SUSPENDED' | 'FAILED' | 'CANCELLED';

export interface WorkflowInstance {
  readonly instanceId: WorkflowInstanceId;
  readonly workflowId: WorkflowId;
  readonly tenantId: string;
  readonly status: WorkflowStatus;
  readonly currentStageId?: string;
  readonly activeStepIds: WorkflowStepId[];
  readonly completedStepIds: WorkflowStepId[];
  readonly initiatedByRoleId: string;
  readonly startedAt: Date;
  readonly completedAt?: Date;
}
