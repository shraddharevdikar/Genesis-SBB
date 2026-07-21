export type AssessmentType =
  | 'POP_QUIZ'
  | 'MIDTERM_EXAMINATION'
  | 'FINAL_EXAMINATION'
  | 'LAB_PRACTICAL_EXAM'
  | 'TERM_PAPER_PROJECT'
  | 'PORTFOLIO_REVIEW_ACC_PANEL'
  | 'STANDARDIZED_PLACEMENT_TEST';

export interface Assessment {
  readonly assessmentId: string;
  readonly uniqueAssessmentCode: string; // e.g., "ASM-2026-FALL-CS101-MID"
  readonly associatedCourseIdString: string; // Links to Course
  readonly assessmentType: AssessmentType;
  readonly displayTitle: string;
  readonly syllabusCoverageSummaryText?: string;
  readonly assessmentMaximumPossiblePoints: number; // e.g., 150
  readonly gradingWeightPercentageDecimal: number; // e.g., 0.30 (30% of final grade)
  readonly assessmentDurationMinutesCount?: number; // e.g., 120 minutes (null for take-home papers)
  readonly proctoringSupervisionRequiredFlag: boolean;
  readonly scheduledSessionTimestamp?: Date;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
