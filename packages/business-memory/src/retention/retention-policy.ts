export interface RetentionPolicy {
  readonly policyId: string;
  readonly policyName: string;
  readonly retentionPeriodDays: number; // -1 for indefinite retention
  readonly isLocked: boolean; // if true, policy cannot be altered
  readonly updatedAt: Date;
}
