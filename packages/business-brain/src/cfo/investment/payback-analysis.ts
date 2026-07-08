export interface PaybackAnalysis {
  readonly analysisId: string;
  readonly opportunityId: string;
  readonly paybackPeriodMonths: number;
  readonly breakEvenPointMonths: number;
  readonly discountRatePercent: number;
  readonly projectedCashInflowMonthlyUSD: number;
  readonly remarks: string;
}
