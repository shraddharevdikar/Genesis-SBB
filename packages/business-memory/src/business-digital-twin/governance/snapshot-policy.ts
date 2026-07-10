export interface SnapshotPolicy {
  readonly retentionPeriodDays: number;
  readonly maxSnapshotsPerTenantCount: number;
  readonly isAutoArchiveEnabled: boolean;
  readonly complianceOfficerRoleId?: string;
}
