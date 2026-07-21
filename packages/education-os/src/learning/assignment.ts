export interface Assignment {
  readonly assignmentId: string;
  readonly uniqueAssignmentCode: string; // e.g., "ASG-2026-FALL-CS101-HW1"
  readonly associatedCourseIdString: string; // Links to Course
  readonly displayTitle: string;
  readonly detailedDescriptionText: string;
  readonly assignmentMaximumPossiblePoints: number; // e.g., 100
  readonly gradingWeightPercentageDecimal: number; // e.g., 0.15 (15% of final grade)
  readonly publicationTimestamp: Date;
  readonly officialDueTimestamp: Date;
  readonly finalLateSubmissionCutoffTimestamp: Date;
  readonly allowsGroupSubmissionsFlag: boolean;
  readonly associatedLearningModuleIdString?: string; // Optional links to module
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
