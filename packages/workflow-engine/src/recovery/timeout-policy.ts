import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface TimeoutPolicy {
  readonly timeoutPolicyId: string;
  readonly targetStepId: WorkflowStepId;
  readonly maxAllowedDurationMs: number;
  readonly onTimeoutAction: 'ABORT' | 'ESCALATE' | 'PROCEED_WITH_DEFAULT' | 'RETRY';
  readonly escalationRoleId?: string;
}
