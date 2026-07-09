export interface GrowthStrategyCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly strategyId: string;
  readonly name: string;
  readonly focusType: 'ACQUISITION' | 'RETENTION' | 'EXPANSION' | 'MARKET_ENTRY' | 'PRODUCT_LAUNCH';
  readonly expectedBudgetUSD: number;
  readonly createdAt: Date;
}
