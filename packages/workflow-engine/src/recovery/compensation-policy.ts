import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface CompensationPolicy {
  readonly compensationPolicyId: string;
  readonly sourceStepId: WorkflowStepId;
  readonly compensationStepId: WorkflowStepId;
  readonly requiresManualTrigger: boolean;
  readonly compensationTimeoutMs: number;
}
