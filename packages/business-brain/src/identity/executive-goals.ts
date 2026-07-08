export interface ExecutiveGoal {
  readonly id: string;
  readonly description: string;
  readonly targetMetric: string;
  readonly targetValue: number | string;
  readonly deadline: Date;
  readonly currentProgress: number | string;
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}
