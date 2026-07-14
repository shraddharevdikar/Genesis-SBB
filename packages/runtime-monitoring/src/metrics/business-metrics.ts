export interface BusinessMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly targetDepartmentId?: string;
  readonly processedTransactionsCount: number;
  readonly successfulBusinessMilestonesCount: number;
  readonly aggregatedFinancialValueAmount?: number;
  readonly transactionFailureValueAmount?: number;
  readonly currencyCode?: string;
  readonly recordedAt: Date;
}
