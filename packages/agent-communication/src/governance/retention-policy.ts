export interface RetentionPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly channelScopeCode: string; // e.g. "SBB_INTERNAL_CHAT.*"
  readonly retentionDurationDays: number;
  readonly hardDeleteAfterDuration: boolean;
  readonly requiresLegalHoldAuditing: boolean;
  readonly lastModifiedAt: Date;
}
