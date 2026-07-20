export type RecommendationImpactCode =
  | 'HIGH_OPEX_REDUCTION'
  | 'MEDIUM_OPEX_REDUCTION'
  | 'HIGH_LEAD_INCREASE'
  | 'MEDIUM_LEAD_INCREASE'
  | 'BRAND_AWARENESS_BOOST';

export interface OptimizationRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g. "REC-MKTG-BID-202"
  readonly targetCampaignIdString: string;
  readonly targetChannelUniqueCodeString: string; // e.g. "CHN-PAID-SEM"
  readonly actionSuggestedNotes: string; // e.g. "Shift 15% budget from LinkedIn to Google Ads"
  readonly estimatedCostSavingsAmount: number;
  readonly estimatedLeadVolumeIncreaseCount: number;
  readonly impactLevel: RecommendationImpactCode;
  readonly confidenceScoreRatio: number; // 0 to 1
  readonly isAppliedFlag: boolean;
  readonly appliedByOperatorRoleId?: string;
  readonly appliedAt?: Date;
}
