import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface ExecutionPath {
  readonly pathId: string;
  readonly traceId: string;
  readonly visitedStepIds: WorkflowStepId[];
  readonly decisionBranchesEvaluated: Record<string, string>; // stepId -> selectedOutcome
  readonly totalStepsExecuted: number;
}
