export interface CashFlowTransaction {
  readonly transactionId: string;
  readonly uniqueTransactionCode: string; // e.g. "TXN-CASH-2026-042"
  readonly valueDate: Date;
  readonly transactionType: 'OPERATING_INFLOW' | 'OPERATING_OUTFLOW' | 'INVESTING_INFLOW' | 'INVESTING_OUTFLOW' | 'FINANCING_INFLOW' | 'FINANCING_OUTFLOW';
  readonly sourceOrDestinationName: string; // e.g. "Stripe customer payouts", "Rent payment"
  readonly ledgerAccountCodeString?: string;
  readonly netAmount: number; // positive for inflow, negative for outflow
  readonly currencyCode: string;
  readonly classificationTag: string; // e.g. "SALARY", "SUBSCRIBE_REVENUE"
}

export interface CashFlowStatement {
  readonly statementId: string;
  readonly uniqueStatementCode: string; // e.g. "CFS-2026-Q3"
  readonly startDate: Date;
  readonly endDate: Date;
  readonly transactionsList: CashFlowTransaction[];
  readonly aggregateOperatingNetCashFlowAmount: number;
  readonly aggregateInvestingNetCashFlowAmount: number;
  readonly aggregateFinancingNetCashFlowAmount: number;
  readonly netIncreaseOrDecreaseInCashAmount: number;
  readonly cashAtBeginningOfPeriodAmount: number;
  readonly cashAtEndOfPeriodAmount: number;
  readonly currencyCode: string;
  readonly calculatedAt: Date;
}
