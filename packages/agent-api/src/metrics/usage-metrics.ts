export interface UsageMetrics {
  readonly usageRecordId: string;
  readonly tenantId: string;
  readonly apiSessionId: string;
  readonly invokedCapabilityCode: string;
  readonly transactionCostChfValue: number;
  readonly billingPeriodCode: string;
  readonly recordedAt: Date;
}
