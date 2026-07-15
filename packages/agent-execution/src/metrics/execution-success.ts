export interface ExecutionSuccess {
  readonly metricId: string;
  readonly targetExecutionId: string;
  readonly wasSuccessful: boolean;
  readonly stepSuccessRatio: number; // Completed steps / Total steps (0.0 - 1.0)
  readonly recoveryAttemptRate: number; // Recovery interventions triggered / Failure events
  readonly recoverySuccessRatio: number; // Successful recoveries / Total recovery interventions
  readonly isWithinSlaLimit: boolean;
  readonly computedAt: Date;
}
