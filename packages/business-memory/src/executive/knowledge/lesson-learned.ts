export interface LessonLearned {
  readonly lessonId: string;
  readonly scenarioDescription: string;
  readonly whatWentWell: string[];
  readonly whatFailed: string[];
  readonly keyRemediationPlan: string;
  readonly preventiveActions: string[];
}
