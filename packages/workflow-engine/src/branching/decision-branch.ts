import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface DecisionBranch {
  readonly branchId: string;
  readonly decisionStepId: WorkflowStepId;
  readonly possibleOutcomes: string[];
  readonly defaultOutcome: string;
  readonly mapping: Record<string, WorkflowStepId>; // outcome -> next step
}
