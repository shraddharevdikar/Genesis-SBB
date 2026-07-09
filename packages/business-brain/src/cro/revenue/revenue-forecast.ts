export interface ForecastItem {
  readonly quarter: string; // e.g. "Q3-2026"
  readonly conservativeArrUSD: number;
  readonly expectedArrUSD: number;
  readonly optimisticArrUSD: number;
}

export interface RevenueForecast {
  readonly forecastId: string;
  readonly tenantId: string;
  readonly compiledAt: Date;
  readonly quarters: ForecastItem[];
  readonly aggregateAnnualTargetUSD: number;
  readonly forecastConfidenceScore: number; // 0 to 100
  readonly primaryForecastBlockers: string[];
}
