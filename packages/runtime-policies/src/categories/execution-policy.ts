import { PolicyId } from '../identity/policy-id.js';

export interface ExecutionPolicy {
  readonly executionPolicyId: string;
  readonly policyId: PolicyId;
  readonly maxConcurrencyCount: number;
  readonly timeoutMilliseconds: number;
  readonly priorityWeight: number;
  readonly fallbackAction: 'REJECT' | 'QUEUE' | 'REDIRECT' | 'BYPASS';
  readonly maxRetryAttempts: number;
}
