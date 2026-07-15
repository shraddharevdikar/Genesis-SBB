export interface RegulatoryPolicy {
  readonly regulatoryId: string;
  readonly authorityBodyName: string; // e.g. "European Union (GDPR)" or "AICPA (SOC 2)"
  readonly standardName: string; // e.g. "GDPR_ARTICLE_17_RIGHT_TO_ERASURE" or "SOC2_TRUST_SERVICES_CRITERIA"
  readonly clauseIdentifierCode: string; // e.g., "CC6.1" or "Art_17_1"
  readonly checkExpressionText: string; // The specific governance condition script evaluated
  readonly complianceSeverityRating: 'INFORMATIONAL' | 'STANDARDS_VIOLATED' | 'CRITICAL_LEGAL_BREACH';
}
