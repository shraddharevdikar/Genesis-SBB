export interface EmployeeFeedback {
  readonly feedbackId: string;
  readonly uniqueFeedbackCode: string; // e.g. "FDB-2026-07-0042"
  readonly authorEmployeeIdString?: string; // Optional (anonymous feedback check)
  readonly targetEmployeeIdString: string;
  readonly contentText: string;
  readonly sentimentCategory: 'POSITIVE' | 'NEUTRAL' | 'CONSTRUCTIVE_IMPROVEMENT';
  readonly sharingPermissionCode: 'PRIVATE_TO_RECIPIENT' | 'VISIBLE_TO_MANAGER' | 'PUBLIC_TEAM_PRAISE';
  readonly isAnonymousFlag: boolean;
  readonly isLinkedToPerformanceReviewFlag: boolean;
  readonly createdAt: Date;
}
