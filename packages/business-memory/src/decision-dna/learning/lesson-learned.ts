export interface LessonLearned {
  readonly lessonId: string;
  readonly title: string;
  readonly description: string;
  readonly coreInsight: string;
  readonly recommendationsForFuture: string[];
  readonly category: 'SUCCESS_FACTOR' | 'FAILURE_FACTOR' | 'UNANTICIPATED_RISK' | 'BIAS_DETECTED';
  readonly recordedAt: Date;
  readonly recordedByRoleId: string;
}
