export type LegalInsightSeverity =
  | 'ADVISORY'
  | 'COMPLIANCE_GAP_WARNING'
  | 'CRITICAL_LEGAL_EXPOSURE';

export interface ComplianceInsight {
  readonly insightId: string;
  readonly uniqueInsightCode: string; // e.g. "INS-LEG-GDPR-TRANSFER"
  readonly severityLevel: LegalInsightSeverity;
  readonly summaryNotes: string;
  readonly confidenceRatioDecimal: number; // e.g. 0.95
  readonly recommendedMitigationActionText: string;
  readonly associatedEntityIdString?: string;
  readonly isResolvedFlag: boolean;
  readonly createdAt: Date;
}
