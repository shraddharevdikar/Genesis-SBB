export type RevenueInsightClassificationCode =
  | 'VELOCITY_SPIKE'
  | 'VELOCITY_DROP_STAGNATION'
  | 'TERRITORY_QUOTA_GAP_RISK'
  | 'COMPETITOR_WIN_LOSS_SHIFT'
  | 'CONTRACT_EXPANSION_TRIGGER';

export interface RevenueInsight {
  readonly insightId: string;
  readonly uniqueInsightCode: string; // e.g. "INS-REV-DACH-041"
  readonly salesTerritoryCode: string; // e.g. "TERR-DACH"
  readonly insightType: RevenueInsightClassificationCode;
  readonly observationSummaryText: string;
  readonly detectedSigmaOffsetValue: number; // For statistical anomaly classification
  readonly probableRootCauseNotesText: string;
  readonly recommendedMitigationActionCode?: string; // Links to a DealRecommendation
  readonly confidenceScoreRatioDecimal: number; // 0 to 1
  readonly createdAt: Date;
}
