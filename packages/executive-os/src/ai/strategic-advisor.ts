export interface AdvisorRecommendation {
  readonly subjectTitle: string;
  readonly recommendedActionText: string;
  readonly alignedObjectiveIdsList: string[];
  readonly riskScoreImpactNumeric: number; // expected reduction or rise
  readonly confidenceScoreDecimal: number; // e.g. 0.89
}

export interface StrategicAdvisorAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "ANL-STR-ADV-2026-02"
  readonly focusAreaDescription: string;
  readonly recommendationsList: AdvisorRecommendation[];
  readonly executiveSummaryText: string;
  readonly analyzedAt: Date;
}
