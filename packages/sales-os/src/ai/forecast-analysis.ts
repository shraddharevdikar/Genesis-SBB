export interface ForecastAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "ANA-FOR-2026-Q3"
  readonly targetForecastCodeString: string;
  readonly meanAbsolutePercentageErrorMAPE: number; // Historical accuracy metric
  readonly trendTrajectoryCode: 'ACCELERATING' | 'STABLE_FLAT' | 'DECELERATING_RISK';
  readonly identifiedTopPipelineRiskFactorsNotesList: string[]; // e.g., ["Slipping expected close dates", "Low coverage ratio"]
  readonly varianceExplanationNotes: string;
  readonly recommendationsToCloseQuotaGapNotesText?: string;
  readonly generatedAt: Date;
}
