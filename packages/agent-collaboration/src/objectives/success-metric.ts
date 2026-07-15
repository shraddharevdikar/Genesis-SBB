export interface SuccessMetric {
  readonly metricId: string;
  readonly name: string;
  readonly targetValueThreshold: number;
  readonly currentMeasuredValue: number;
  readonly unitCode: string; // e.g. "PERCENTAGE_COMPLETED", "LATENCY_SECONDS"
  readonly lastEvaluatedAt: Date;
}
