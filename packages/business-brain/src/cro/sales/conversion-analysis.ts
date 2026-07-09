export interface StageConversionRate {
  readonly fromStage: string;
  readonly toStage: string;
  readonly conversionRatePercent: number; // e.g. 35.0 for 35%
}

export interface ConversionAnalysis {
  readonly analysisId: string;
  readonly tenantId: string;
  readonly timePeriod: string; // e.g. "Q2-2026"
  readonly overallWinRatePercent: number; // closed-won / (closed-won + closed-lost)
  readonly averageSalesCycleDurationDays: number;
  readonly stageConversions: StageConversionRate[];
  readonly majorFrictionPoints: string[];
  readonly analyzedAt: Date;
}
