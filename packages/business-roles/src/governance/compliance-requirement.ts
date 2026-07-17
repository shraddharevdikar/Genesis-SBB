export interface ComplianceRequirement {
  readonly requirementId: string;
  readonly authorityBodyNameString: string; // e.g. "FINMA", "EU_GDPR"
  readonly regulationTitleString: string;
  readonly uniqueReferenceArticleCode: string; // e.g. "GDPR-ARTICLE-6"
  readonly penaltyRiskLevelCode: 'LOW' | 'MEDIUM' | 'HIGH' | 'SYSTEMIC_SHUTDOWN';
  readonly lastAuditPassedAt: Date;
}
