import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowHealth {
  readonly healthAuditId: string;
  readonly workflowId: WorkflowId;
  readonly activeRunningInstancesCount: number;
  readonly completedInstancesCount: number;
  readonly failedInstancesCount: number;
  readonly overallSuccessRatioPercentage: number; // e.g. 0.0 - 100.0
  readonly averageInstanceFailureRatePercentage: number;
  readonly lastCalculatedAt: Date;
}
