import { SystemHealthState } from '../core/monitoring-state.js';

export interface WorkflowHealth {
  readonly engineId: string;
  readonly status: SystemHealthState;
  readonly activeWorkflowsCount: number;
  readonly averageWorkflowDurationMs: number;
  readonly failedWorkflowsCount: number;
  readonly workflowFailureRatePercentage: number;
  readonly totalStepsExecutedCount: number;
  readonly lastEvaluatedAt: Date;
}
