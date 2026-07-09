export interface ComplianceStatus {
  readonly complianceId: string;
  readonly tenantId: string;
  readonly frameworkName: string; // e.g., "SOC2 Type II", "GDPR", "HIPAA", "ISO 27001"
  readonly isCompliant: boolean;
  readonly complianceScorePercent: number; // 0 to 100
  readonly gapsFound: string[];
  readonly remediationTasksCount: number;
  readonly lastAuditAt: Date;
  readonly nextExternalAuditAt: Date;
}
