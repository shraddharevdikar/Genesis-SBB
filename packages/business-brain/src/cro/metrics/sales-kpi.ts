export interface SalesKPI {
  readonly kpiId: string;
  readonly tenantId: string;
  readonly period: string;
  readonly totalClosedWonUSD: number;
  readonly quotaAttainmentAveragePercent: number;
  readonly winRatePercent: number;
  readonly salesVelocityDays: number;
  readonly averageDealSizeUSD: number;
  readonly countActiveRepCount: number;
  readonly updatedBy: string;
  readonly updatedAt: Date;
}
