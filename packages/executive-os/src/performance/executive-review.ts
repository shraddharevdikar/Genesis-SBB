export interface ExecutiveReview {
  readonly reviewId: string;
  readonly uniqueReviewCode: string; // e.g. "REV-EXE-PERF-2026-H1"
  readonly targetFiscalHalfYearString: 'H1' | 'H2' | 'FULL_YEAR';
  readonly assessmentYear: number;
  readonly reviewerBoardMemberRoleIdString: string; // e.g. "BOARD_CHAIR"
  readonly revieweeExecutiveRoleIdString: string; // e.g. "CEO"
  readonly achievementScoreDecimal: number; // e.g. 0.95
  readonly boardFeedbackSynthesisText: string;
  readonly continuousImprovementGoalsJSON: string; // list of goals for the next half
  readonly compensationMultiplierDecimal: number; // e.g. 1.10 (110% of target bonus)
  readonly signedOffFlag: boolean;
  readonly completedAt: Date;
}
