export interface RevenueKPI {
  readonly kpiId: string;
  readonly tenantId: string;
  readonly period: string; // e.g. "Q2-2026"
  readonly arrUSD: number;
  readonly mrrUSD: number;
  readonly netRevenueRetentionPercent: number;
  readonly expansionArrUSD: number;
  readonly contractionArrUSD: number;
  readonly churnedArrUSD: number;
  readonly avgLtvUSD: number;
  readonly updatedBy: string;
  readonly updatedAt: Date;
}
