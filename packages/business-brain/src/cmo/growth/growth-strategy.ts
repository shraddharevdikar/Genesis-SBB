export interface GrowthTarget {
  readonly targetId: string;
  readonly metricName: string; // e.g., "Monthly Active Users (MAU)", "Customer Lifetime Value (LTV)"
  readonly startValue: number;
  readonly targetValue: number;
  readonly deadlineQuarter: string; // e.g., "Q4-2026"
}

export interface GrowthStrategy {
  readonly strategyId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly description: string;
  readonly focusType: 'ACQUISITION' | 'RETENTION' | 'EXPANSION' | 'MARKET_ENTRY' | 'PRODUCT_LAUNCH';
  readonly methodology: 'MARKET_PENETRATION' | 'MARKET_DEVELOPMENT' | 'PRODUCT_DEVELOPMENT' | 'DIVERSIFICATION';
  readonly targets: GrowthTarget[];
  readonly criticalAssumptions: string[];
  readonly expectedBudgetUSD: number;
  readonly isApproved: boolean;
  readonly createdAt: Date;
}
