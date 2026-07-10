export interface GoalState {
  readonly goalId: string;
  readonly title: string;
  readonly metricName: string;
  readonly targetValue: string;
  readonly currentValue: string;
  readonly achievementPercentage: number; // e.g. 85.0
  readonly status: 'MET' | 'ON_TRACK' | 'BEHIND' | 'FAILED';
}
