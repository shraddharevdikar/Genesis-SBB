export interface MarketingROI {
  readonly roiId: string;
  readonly tenantId: string;
  readonly investmentId: string; // references MarketingInvestment
  readonly projectedROIPercent: number; // e.g. 150 (for 150%)
  readonly actualROIPercent?: number;
  readonly paybackPeriodMonths: number;
  readonly totalConversionsCount: number;
  readonly averageCostPerAcquisitionUSD: number;
  readonly revenueGeneratedUSD?: number;
  readonly calculationConfidenceScore: number; // 0 to 100
  readonly evaluatedAt: Date;
}
