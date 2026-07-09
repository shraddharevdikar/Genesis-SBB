export interface WorkforceKPI {
  readonly kpiId: string;
  readonly tenantId: string;
  readonly period: string;
  readonly totalFteCount: number;
  readonly totalContractorCount: number;
  readonly workforceCostToRevenueRatio: number; // e.g. 0.45 for 45%
  readonly revenuePerFTEUSD: number;
  readonly averageTimeToHireDays: number;
  readonly trainingHoursPerFteAvg: number;
  readonly updatedBy: string;
  readonly updatedAt: Date;
}
