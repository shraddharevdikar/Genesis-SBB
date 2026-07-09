export interface RevenueHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly arrUSD: number; // Annual Recurring Revenue
  readonly mrrUSD: number; // Monthly Recurring Revenue
  readonly netRevenueRetentionPercent: number; // NRR, e.g. 115.4
  readonly grossRevenueRetentionPercent: number; // GRR, e.g. 94.2
  readonly logoChurnPercent: number; // Logo Churn rate
  readonly expansionArrUSD: number; // New expansion ARR
  readonly contractionArrUSD: number; // MRR/ARR contraction impact
  readonly customerAcquisitionCostPaybackMonths: number;
  readonly evaluatedAt: Date;
}
