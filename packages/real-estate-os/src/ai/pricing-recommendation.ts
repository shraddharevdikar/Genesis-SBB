import { InventoryUnitId } from '../projects/inventory.js';

export interface UnitPricingRecommendation {
  readonly associatedUnitId: InventoryUnitId;
  readonly recommendedBasePriceAmount: number;
  readonly confidenceScoreDecimal: number;
  readonly adjustedPremiumFloorRiseFactor: number;
  readonly rationalBasisText: string;
}

export interface PricingRecommendationAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "PRC-REC-HEIGHTS-JULY"
  readonly focusAreaDescription: string;
  readonly recommendationsList: UnitPricingRecommendation[];
  readonly marketCompetitorIndexDecimal: number; // relative ratio to surrounding developer prices
  readonly analyzedAt: Date;
}
