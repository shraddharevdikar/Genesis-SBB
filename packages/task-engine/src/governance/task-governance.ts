export interface TaskGovernance {
  readonly governanceId: string;
  readonly tenantId: string;
  readonly defaultRetentionDays: number;
  readonly requireDualAuthorizationForCritical: boolean;
  readonly complianceStandard: 'SOC2' | 'HIPAA' | 'GDPR' | 'STANDARD';
  readonly archiveOnCompletion: boolean;
}
