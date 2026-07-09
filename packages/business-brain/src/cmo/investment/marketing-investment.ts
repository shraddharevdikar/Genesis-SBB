export interface MarketingInvestment {
  readonly investmentId: string;
  readonly tenantId: string;
  readonly quarter: string; // e.g. "Q3-2026"
  readonly totalAllocatedBudgetUSD: number;
  readonly targetCACUSD: number;
  readonly projectedLtvToCacRatio: number; // e.g. 3.5
  readonly attributionModel: 'FIRST_TOUCH' | 'LAST_TOUCH' | 'LINEAR' | 'W_SHAPED' | 'DATA_DRIVEN';
  readonly criticalSpendAreas: {
    readonly description: string;
    readonly amountUSD: number;
  }[];
  readonly status: 'DRAFT' | 'APPROVED' | 'ACTIVE';
  readonly approvedBy: string;
  readonly createdAt: Date;
}
