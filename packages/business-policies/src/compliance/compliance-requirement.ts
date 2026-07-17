export interface ComplianceRequirement {
  readonly requirementId: string;
  readonly authorityCode: 'GDPR' | 'HIPAA' | 'FINMA' | 'SOX' | 'SOC2' | 'ISO27001' | 'INTERNAL_AUDIT';
  readonly requirementSectionCode: string; // e.g. "Article-32-1-a"
  readonly summaryTitle: string;
  readonly citationUrlText?: string;
  readonly complianceAuditPolicyLevelString: 'CRITICAL_BLOCKING' | 'WARN_LOG_ONLY' | 'VOLUNTARY';
}
