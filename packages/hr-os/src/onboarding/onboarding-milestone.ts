export interface OnboardingMilestone {
  readonly milestoneId: string;
  readonly milestoneLabelCode: 'DAY_ONE_ACCESS' | 'WEEK_ONE_INTEGRATION' | 'DAY_30_FIRST_REVIEW' | 'DAY_60_INDEPENDENT' | 'DAY_90_PROBATION_SIGN_OFF';
  readonly targetDate: Date;
  readonly isAchievedFlag: boolean;
  readonly supervisorApprovedFlag: boolean;
  readonly employeeSelfAssessedFlag: boolean;
  readonly achievedAt?: Date;
  readonly assessmentRemarksNotes: string;
}
