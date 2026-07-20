export interface GovernanceReview {
  readonly reviewId: string;
  readonly uniqueReviewCode: string; // e.g. "REV-GOV-2026-CH"
  readonly scopeQuarterString: string; // e.g. "2026-Q2"
  readonly legalOfficerRoleIdString: string;
  readonly checkedResolutionIdsList: string[];
  readonly complianceDiscrepanciesNotes: string;
  readonly validationPassedFlag: boolean;
  readonly recommendedAmendmentsJSON: string;
  readonly reviewedAt: Date;
}
