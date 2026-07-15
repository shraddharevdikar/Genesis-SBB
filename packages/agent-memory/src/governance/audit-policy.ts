export interface AuditPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly enableImmutableAuditing: boolean; // Immutable blockchain or ledger recording
  readonly trackSuccessfulRetrievals: boolean;
  readonly trackDeniedAccessAttempts: boolean;
  readonly alarmTriggerThresholdFailedAccessCount: number; // e.g. 5 failed accesses per hour triggers alarm
  readonly lastModifiedAt: Date;
}
