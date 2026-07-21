export type TermType =
  | 'SEMESTER'
  | 'QUARTER'
  | 'TRIMESTER'
  | 'SUMMER_SESSION'
  | 'WINTER_MINI_SESSION'
  | 'CONTINUOUS_ENROLLMENT';

export interface AcademicTerm {
  readonly termId: string;
  readonly uniqueTermCode: string; // e.g., "TERM-2026-FALL"
  readonly termTitle: string;
  readonly termType: TermType;
  readonly termStartDate: Date;
  readonly termEndDate: Date;
  readonly classRegistrationStartDate: Date;
  readonly classRegistrationEndDate: Date;
  readonly officialCensusDate: Date; // Important for enrollment regulatory reporting / audits
  readonly gradesSubmissionDeadlineDate: Date;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
