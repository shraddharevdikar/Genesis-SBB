import { WorkflowStepId } from '../identity/workflow-step-id.js';
import { WorkflowCondition } from '../definition/workflow-condition.js';

export interface ConditionalBranch {
  readonly conditionId: string;
  readonly evaluateStepId: WorkflowStepId;
  readonly condition: WorkflowCondition;
  readonly matchedNextStepId: WorkflowStepId;
  readonly fallbackNextStepId: WorkflowStepId;
}
