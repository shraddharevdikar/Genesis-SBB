export interface SchedulingGovernance {
  readonly governanceId: string;
  readonly tenantId: string;
  readonly requireDualAuthorizationForSystemWide: boolean;
  readonly defaultRetentionDays: number;
  readonly complianceStandard: 'SOC2' | 'HIPAA' | 'GDPR' | 'STANDARD';
  readonly isRestrictedModeEnabled: boolean;
}
