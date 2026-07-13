export interface TimeoutPolicy {
  readonly timeoutPolicyId: string;
  readonly targetStepId: string;
  readonly timeoutMinutes: number;
  readonly actionOnTimeout: 'AUTO_REJECT' | 'AUTO_APPROVE' | 'ESCALATE' | 'RETRY_ALERT';
}
