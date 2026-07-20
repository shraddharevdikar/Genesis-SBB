export interface EnterpriseHealthScoreBreakdown {
  readonly marketingAndSalesScoreDecimal: number;
  readonly financeAndCapitalScoreDecimal: number;
  readonly peopleAndCultureScoreDecimal: number;
  readonly operationsAndLogisticsScoreDecimal: number;
  readonly legalAndRiskScoreDecimal: number;
}

export interface EnterpriseHealthAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "ANL-HLT-2026-Q2"
  readonly overallHealthScoreDecimal: number; // e.g. 0.91 (91%)
  readonly scoresBreakdown: EnterpriseHealthScoreBreakdown;
  readonly coreRiskObservationsList: string[];
  readonly optimizationOpportunitiesList: string[];
  readonly performedAt: Date;
}
