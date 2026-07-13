export interface ApprovalGovernance {
  readonly governanceId: string;
  readonly tenantId: string;
  readonly defaultRetentionDays: number;
  readonly requireCryptographicAuditTrail: boolean;
  readonly maxEscalationDepth: number;
  readonly complianceStandard: 'SOC2' | 'HIPAA' | 'GDPR' | 'STANDARD';
}
