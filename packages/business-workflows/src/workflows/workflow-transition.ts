import { WorkflowStepId } from '../identity/workflow-step-id.js';

export type TransitionTypeCode =
  | 'SEQUENTIAL_DIRECT'
  | 'CONDITIONAL_BRANCH'
  | 'PARALLEL_SPLIT'
  | 'PARALLEL_JOIN_BARRIER';

export interface WorkflowTransition {
  readonly transitionId: string;
  readonly uniqueCode: string; // e.g. "TRN-STP1-STP2"
  readonly sourceStepId: WorkflowStepId;
  readonly targetStepId: WorkflowStepId;
  readonly transitionType: TransitionTypeCode;
  readonly routingConditionExpressionJsonString?: string; // e.g. "$.status == 'APPROVED'"
  readonly isDefaultFallbackRoute: boolean;
}
