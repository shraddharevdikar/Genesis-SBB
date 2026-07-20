export interface ComplianceAssessment {
  readonly assessmentId: string;
  readonly uniqueAssessmentCode: string; // e.g. "ASM-COMP-2026-Q2"
  readonly targetFrameworkIdString: string;
  readonly assessorOperatorRoleIdString: string;
  readonly checkedControlIdsList: string[];
  readonly testedFailuresCount: number;
  readonly compliantFlag: boolean;
  readonly overallConfidenceScoreRatioDecimal: number; // e.g. 0.98
  readonly detailedAuditNotes: string;
  readonly executiveSummaryText: string;
  readonly completedAt: Date;
}
