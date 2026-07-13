import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface RetryPolicy {
  readonly retryPolicyId: string;
  readonly stepId: WorkflowStepId;
  readonly maxAttempts: number;
  readonly initialBackoffMs: number;
  readonly backoffMultiplier: number;
  readonly maxBackoffMs: number;
  readonly retryableErrorCodes: string[];
}
