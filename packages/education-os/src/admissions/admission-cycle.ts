export interface AdmissionCycle {
  readonly admissionCycleId: string;
  readonly uniqueCycleCode: string; // e.g., "CYC-2026-FALL-REGULAR"
  readonly cycleDisplayName: string; // e.g. "Fall 2026 Regular Decision"
  readonly applicationSubmissionStartDate: Date;
  readonly applicationSubmissionDeadlineDate: Date;
  readonly admissionsReviewPeriodEndDate: Date;
  readonly officialDecisionReleaseDate: Date;
  readonly targetStudentEnrollmentIntakeCapacity: number; // e.g. 1500 students
  readonly totalAdmittedCountToDate: number;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
