export type ReviewOutcomeCode = 'APPROVED_EXCELLENT' | 'APPROVED_WITH_MINIMAL_REVISIONS' | 'REJECTED_HEAVY_REVISIONS_REQUIRED';

export interface ReviewCriteriaGrade {
  readonly criteriaLabelString: string; // e.g. "Security Compliance", "Architectural Soundness"
  readonly scoreDecimal: number; // 0.0 to 10.0
  readonly feedbackNotesText?: string;
}

export interface QualityReview {
  readonly reviewId: string;
  readonly uniqueReviewCode: string; // e.g., "REV-QLT-2026-10-15"
  readonly associatedDeliverableIdString: string; // Links to Deliverable
  readonly leadReviewerStaffRoleIdString: string; // QA Director / Senior Partner (HROS)
  readonly reviewCriteriaGradesList: ReviewCriteriaGrade[];
  readonly overallCompositeScoreDecimal: number; // 0 to 100 scale
  readonly reviewOutcome: ReviewOutcomeCode;
  readonly detailedRemediationInstructionsText?: string;
  readonly completedTimestamp: Date;
}
