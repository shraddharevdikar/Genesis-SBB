export interface DemandForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g. "FST-RE-DEMAND-ZURICH-Q3"
  readonly targetLocationRegionText: string; // e.g. "Zurich Nord"
  readonly propertySegmentType: 'RESIDENTIAL_LUXURY' | 'RESIDENTIAL_AFFORDABLE' | 'COMMERCIAL_GRADE_A' | 'STUDENT_HOUSING';
  readonly simulatedTimeHorizonMonthsCount: number; // e.g. 12 months
  readonly predictedTrendDirection: 'ACCELERATING' | 'STABLE' | 'COOLING_RISK';
  readonly confidenceScoreDecimal: number; // e.g. 0.88 (88% confidence)
  readonly contributingMacroFactorsList: string[]; // e.g. ["Interest rates drop", "Tech hiring boom"]
  readonly strategicMitigationNotes: string;
  readonly generatedAt: Date;
}
