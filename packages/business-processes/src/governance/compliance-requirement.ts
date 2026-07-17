export interface ComplianceRequirement {
  readonly complianceId: string;
  readonly legalActTitleString: string; // e.g. "HIPAA", "SOX", "GDPR"
  readonly uniqueComplianceCode: string;
  readonly severityLevelCode: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly requiresContinuousLoggingTrail: boolean;
}
