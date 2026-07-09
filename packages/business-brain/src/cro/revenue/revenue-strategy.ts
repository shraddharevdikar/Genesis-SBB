export interface RevenueStrategy {
  readonly strategyId: string;
  readonly tenantId: string;
  readonly fiscalYear: string;
  readonly primaryGrowthDrivers: string[]; // e.g., ["ENTERPRISE_SALES", "PLG_EXPANSION"]
  readonly targetedArrUSD: number;
  readonly plannedSalesHireCount: number;
  readonly isApproved: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
