export interface PipelineHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly quarter: string; // e.g., "Q3-2026"
  readonly totalPipelineValueUSD: number;
  readonly marketingSourcedPipelineValueUSD: number;
  readonly marketingSourcedContributionPercent: number; // e.g. 45.0 for 45%
  readonly targetSalesQuotaUSD: number;
  readonly pipelineCoverageMultiplier: number; // e.g., 3.2 (Pipeline Value / Sales Quota)
  readonly averageSalesCycleDurationDays: number;
  readonly pipelineHealthRating: 'HEALTHY' | 'ADEQUATE' | 'DEFICIENT';
  readonly updatedBy: string;
  readonly updatedAt: Date;
}
