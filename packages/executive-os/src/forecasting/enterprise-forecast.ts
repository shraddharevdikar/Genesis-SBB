export interface EnterpriseForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g. "FST-EXE-2026-REVENUE"
  readonly displayName: string;
  readonly category: 'FINANCIAL_REVENUE' | 'MARKET_GROWTH' | 'OPERATIONAL_THROUGHPUT' | 'HEADCOUNT_EXPANSION';
  readonly targetFiscalYear: number;
  readonly forecastBaselineValueDecimal: number;
  readonly optimisticP90ValueDecimal: number;
  readonly pessimisticP10ValueDecimal: number;
  readonly medianP50ValueDecimal: number;
  readonly currencyCode?: string;
  readonly forecastModelTypeString: string; // e.g. "Monte Carlo Simulation" or "SARIMA"
  readonly calculatedAt: Date;
}
