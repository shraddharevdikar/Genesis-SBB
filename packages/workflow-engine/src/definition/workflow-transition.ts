import { WorkflowStepId } from '../identity/workflow-step-id.js';
import { WorkflowCondition } from './workflow-condition.js';

export interface WorkflowTransition {
  readonly transitionId: string;
  readonly sourceStepId: WorkflowStepId;
  readonly targetStepId: WorkflowStepId;
  readonly conditions: WorkflowCondition[];
  readonly description?: string;
}
