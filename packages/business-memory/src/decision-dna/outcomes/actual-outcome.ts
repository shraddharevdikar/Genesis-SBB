export interface ActualOutcome {
  readonly metricName: string;
  readonly actualValue: string;
  readonly achievedDate: Date;
  readonly notes?: string;
  readonly observedByRoleId: string;
}
