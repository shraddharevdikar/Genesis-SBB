import { RealEstateProjectId } from '../projects/real-estate-project.js';

export interface UnreleasedInventoryStrategy {
  readonly projectId: RealEstateProjectId;
  readonly optimalHoldReleaseUnitsCount: number;
  readonly pricingEscalationProjectedDecimal: number; // expected rise e.g. 0.05
  readonly holdingCostPenaltyEstimateAmount: number;
  readonly strategicRecommendationText: string;
}

export interface InventoryAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "INV-ANL-HEIGHTS"
  readonly overallAbsorptionRateRatioDecimal: number; // rate of units sold per month
  readonly unreleasedInventoryStrategiesList: UnreleasedInventoryStrategy[];
  readonly criticalOverhangRiskMonthsCount: number; // months of inventory supply remaining
  readonly performedAt: Date;
}
