export interface FinancialPeriodClosedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly periodId: string;
  readonly uniquePeriodCode: string;
  readonly fiscalYear: number;
  readonly periodNumber: number;
  readonly closedByOperatorRoleId: string;
  readonly totalAssetBalanceAmount: number;
  readonly totalLiabilityBalanceAmount: number;
  readonly totalEquityBalanceAmount: number;
  readonly netIncomeAmount: number;
  readonly currencyCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
