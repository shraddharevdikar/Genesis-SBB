export interface ImprovementMetrics {
  readonly metricId: string;
  readonly tenantId: string;
  readonly totalProposedImprovementsCount: number;
  readonly totalApprovedCount: number;
  readonly totalRejectedCount: number;
  readonly autoIntegratedCount: number;
  readonly totalEstimatedSavingsChf: number; //CHF savings achieved through integrated improvements
  readonly computedAt: Date;
}
