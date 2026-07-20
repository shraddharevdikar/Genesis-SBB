export type DealRecommendationTypeCode =
  | 'CHAMPION_ENGAGEMENT'
  | 'EXECUTIVE_SPONSOR_INTRODUCTION'
  | 'COMPETITIVE_BATTLECARD_DISPATCH'
  | 'PRICING_RECONCILIATION'
  | 'TECHNICAL_PROVING_STAGE_TRIGGER';

export interface DealRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g. "REC-DEAL-SBB-01"
  readonly targetOpportunityIdString: string;
  readonly recommendationType: DealRecommendationTypeCode;
  readonly recommendedActionSuggestedNotes: string;
  readonly estimatedWinProbabilityBoostPercentageDecimal: number; // e.g. 0.12 (increases prob by 12%)
  readonly confidenceScoreRatioDecimal: number; // e.g. 0-1.0 AI precision
  readonly isAppliedFlag: boolean;
  readonly appliedByOperatorRoleId?: string;
  readonly appliedAt?: Date;
}
