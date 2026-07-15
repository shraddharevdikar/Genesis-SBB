export interface SuccessCriteria {
  readonly criteriaId: string;
  readonly metricName: string; // e.g. "InvoiceCountMatched", "SlaTimeLimitSeconds"
  readonly targetValue: number | string;
  readonly currentValue: number | string;
  readonly isSatisfied: boolean;
}
