export interface AiForecastConfidenceInterval {
  readonly lowerBoundAmount: number;
  readonly expectedMeanAmount: number;
  readonly upperBoundAmount: number;
}

export interface CashflowForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g. "ANA-AI-CF-2026-Q3"
  readonly projectionPeriodCode: string; // e.g. "2026-Q3"
  readonly historicalMeanAbsolutePercentageErrorMAPE: number; // Forecast accuracy tracker
  readonly monthlyInflowProjectionsList: AiForecastConfidenceInterval[];
  readonly monthlyOutflowProjectionsList: AiForecastConfidenceInterval[];
  readonly identifiedTreasuryRiskFactorsNotesList: string[]; // e.g. ["Delayed collections from Enterprise tier", "Upcoming CapEx hardware upgrade"]
  readonly strategicMitigationNotesText?: string;
  readonly generatedAt: Date;
}
