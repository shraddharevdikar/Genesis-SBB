import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowHealth {
  readonly healthId: string;
  readonly workflowId: WorkflowId;
  readonly tenantId: string;
  readonly activeInstancesCount: number;
  readonly failedInstancesCount: number;
  readonly timeoutCount: number;
  readonly lastCalculatedAt: Date;
}
