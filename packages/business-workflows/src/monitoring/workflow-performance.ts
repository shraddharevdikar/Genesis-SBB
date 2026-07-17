import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowPerformance {
  readonly performanceAuditId: string;
  readonly workflowId: WorkflowId;
  readonly averageCycleTimeMinutesCount: number;
  readonly medianCycleTimeMinutesCount: number;
  readonly slaComplianceConformantRatio: number; // e.g. 0.0 - 1.0 (100% compliant)
  readonly averageHumanTaskDurationMinutesCount: number;
  readonly averageAiTaskDurationMinutesCount: number;
  readonly measuredPeriodStartDate: Date;
  readonly measuredPeriodEndDate: Date;
}
