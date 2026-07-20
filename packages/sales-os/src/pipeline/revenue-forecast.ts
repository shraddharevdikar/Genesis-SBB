export interface ForecastProjection {
  readonly pessimisticWorstCaseAmount: number;
  readonly commitRealisticAmount: number;
  readonly optimisticBestCaseAmount: number;
}

export interface RevenueForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g., "FOR-2026-Q3-EMEA"
  readonly targetFiscalQuarterString: string; // e.g., "2026-Q3"
  readonly salesTerritoryCode: string; // e.g., "TERR-DACH"
  readonly quotaTargetAmount: number;
  readonly closedWonRevenueAmountToDate: number;
  readonly pipelineWeightedExpectedRevenueAmount: number;
  readonly predictiveAiForecast: ForecastProjection;
  readonly manualManagerForecast: ForecastProjection;
  readonly confidenceScoreRatioDecimal: number; // e.g., 0-1.0 AI precision confidence
  readonly currencyCode: string;
  readonly producedAt: Date;
}
