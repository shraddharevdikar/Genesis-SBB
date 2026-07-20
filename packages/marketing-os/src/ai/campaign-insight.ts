export type MarketingInsightTypeCode =
  | 'PERFORMANCE_SPIKE'
  | 'PERFORMANCE_DROP'
  | 'BUDGET_PACING_ANOMALY'
  | 'HIGH_CONVERSION_COHORT_DETECTED'
  | 'COMPETITOR_SOV_INTRUSION';

export interface CampaignInsight {
  readonly insightId: string;
  readonly uniqueInsightCode: string; // e.g. "INS-MKTG-SPIKE-402"
  readonly targetCampaignIdString: string;
  readonly insightType: MarketingInsightTypeCode;
  readonly observationSummaryText: string;
  readonly detectedSigmaOffsetValue: number; // For anomaly classification
  readonly probableRootCauseNotesText: string;
  readonly confidenceScoreRatio: number; // 0 to 1
  readonly createdAt: Date;
}
