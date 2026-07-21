export interface DemandForecastInterval {
  readonly intervalStartDate: Date;
  readonly intervalEndDate: Date;
  readonly predictedQuantityDecimal: number;
  readonly confidenceLowerBoundQuantityDecimal: number;
  readonly confidenceUpperBoundQuantityDecimal: number;
}

export interface DemandForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g., "FOR-IPH15-NY-2026"
  readonly targetLocationIdString: string;
  readonly targetSkuCodeString: string;
  readonly timeGranularity: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  readonly forecastIntervalsList: DemandForecastInterval[];
  readonly underlyingFactorsList: string[]; // e.g. ["MEMORIAL_DAY_PROMO", "SUMMER_SEASONALITY"]
  readonly calculatedAt: Date;
}
