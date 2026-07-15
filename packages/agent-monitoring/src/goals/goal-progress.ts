export interface GoalProgress {
  readonly goalId: string;
  readonly tenantId: string;
  readonly targetName: string; // e.g. "Optimize Cargo routing"
  readonly baselineValueMetric: number;
  readonly targetGoalValueMetric: number;
  readonly currentObservationValueMetric: number;
  readonly isAchieved: boolean;
  readonly lastCalculatedAt: Date;
}
