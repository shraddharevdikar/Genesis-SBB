export type FinanceReportTypeCode =
  | 'PROFIT_AND_LOSS'
  | 'BALANCE_SHEET'
  | 'CASH_FLOW_STATEMENT'
  | 'BUDGET_VARIANCE_SUMMARY';

export interface FinanceReportLine {
  readonly lineCode: string; // e.g. "REV-001" for gross revenue, "EXP-040" for software opex
  readonly labelText: string;
  readonly balanceAmount: number;
  readonly comparisonBalanceAmount?: number; // Variance tracking (last period or budget)
  readonly varianceAmount?: number;
  readonly variancePercentageDecimal?: number;
}

export interface FinanceReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g., "REP-PL-2026-Q2"
  readonly displayName: string;
  readonly reportType: FinanceReportTypeCode;
  readonly targetFiscalPeriodCode: string; // e.g., "PRD-2026-Q2"
  readonly reportLinesList: FinanceReportLine[];
  readonly currencyCode: string;
  readonly isAuditedFlag: boolean;
  readonly certifiedByOperatorRoleId?: string;
  readonly producedAt: Date;
}
