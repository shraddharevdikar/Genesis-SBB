export interface FinanceKpiValueRecord {
  readonly currentVal: number;
  readonly targetVal: number;
  readonly unitLabel: string; // e.g. "%", "days", "CHF"
  readonly lastCalculatedDateTime: Date;
  readonly isStatusGreenFlag: boolean;
  readonly deviationPercentageSignedDecimal: number;
}

export interface FinanceKpis {
  readonly netProfitMarginPercentage: FinanceKpiValueRecord;
  readonly EBITDA_MarginPercentage: FinanceKpiValueRecord;
  readonly quickRatioDecimal: FinanceKpiValueRecord; // Cash + marketable securities / current liabilities
  readonly daysSalesOutstandingDSO: FinanceKpiValueRecord; // receivables collections metric in days
  readonly daysPayableOutstandingDPO: FinanceKpiValueRecord; // payables disbursement metric in days
  readonly netMonthlyBurnRateAmount: FinanceKpiValueRecord;
  readonly aggregateSaaS_LTV_To_CAC_Ratio: FinanceKpiValueRecord;
}
