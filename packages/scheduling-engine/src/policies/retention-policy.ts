export interface RetentionPolicy {
  readonly retentionPolicyId: string;
  readonly tenantId: string;
  readonly historyRetentionDays: number;
  readonly pruneCompletedRunsAfterDays: number;
  readonly archiveOnDeactivation: boolean;
  readonly complianceFrameworkAuditLogsRequired: boolean;
}
