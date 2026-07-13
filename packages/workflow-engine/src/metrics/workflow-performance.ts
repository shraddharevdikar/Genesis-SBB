import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowPerformance {
  readonly performanceId: string;
  readonly workflowId: WorkflowId;
  readonly tenantId: string;
  readonly successRatePercentage: number; // e.g. 98.4
  readonly averageDurationMs: number;
  readonly maxStepExecutionDurationMs: number;
  readonly dynamicBottlenecksDetected: string[];
  readonly measuredAt: Date;
}
