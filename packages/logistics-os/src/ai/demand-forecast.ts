export interface ForecastedPeriodItemRow {
  readonly skuCodeString: string;
  readonly periodLabelText: string; // e.g., "2026-11"
  readonly historicalVolumeSoldCount: number;
  readonly predictedDemandVolumeCount: number;
  readonly confidenceIntervalLowerBoundCount: number;
  readonly confidenceIntervalUpperBoundCount: number;
  readonly dominantSeasonalityTrendCode?: string; // e.g. "BLACK_FRIDAY_SPIKE", "SUMMER_SLOWDOWN"
}

export interface DemandForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g. "FST-DEM-2026-Q4"
  readonly associatedWarehouseIdString?: string;
  readonly scopeStartDate: Date;
  readonly scopeEndDate: Date;
  readonly forecastRowsList: ForecastedPeriodItemRow[];
  readonly aggregateConfidencePercentageDecimal: number; // e.g. 0.895 for 89.5%
  readonly calculationNotesText?: string;
  readonly calculatedAt: Date;
}
