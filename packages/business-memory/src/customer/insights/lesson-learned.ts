export interface CustomerLessonLearned {
  readonly lessonId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly targetSituation: string; // e.g. "Severe onboarding delay due to network proxy"
  readonly whatWentWrong: string;
  readonly rootCauseAnalysis: string;
  readonly keyTakeaway: string;
  readonly preventativeActionsImplemented: string[];
  readonly authorRoleId: string; // references internal SBB role
  readonly sharedWithTeamIds: string[]; // references SBB teams
  readonly recordedAt: Date;
}
