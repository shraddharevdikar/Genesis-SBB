export interface ExpectedOutcome {
  readonly targetMetricName: string;
  readonly expectedValue: string;
  readonly targetDate: Date;
  readonly baselineValue: string;
  readonly confidenceIntervalMin?: string;
  readonly confidenceIntervalMax?: string;
}
