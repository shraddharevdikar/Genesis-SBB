export interface StaffingRecommendationRow {
  readonly projectIdString: string;
  readonly roleRequestedText: string;
  readonly proposedConsultantIdString: string;
  readonly consultantNameString: string;
  readonly consultantSkillsMatchPercentageDecimal: number; // e.g. 0.95 for 95% skill gap compatibility
  readonly costArbitrageSavingsAmountDecimal: number; // savings from routing optimized resources
  readonly recommendationRationaleText: string; // e.g. "Substituting Consultant A who has a 95% match and is 15% cheaper than standard local resource"
}

export interface ResourceOptimization {
  readonly optimizationId: string;
  readonly uniqueOptimizationCode: string; // e.g. "OPT-RES-2026-10-15"
  readonly associatedPracticeAreaCode: string;
  readonly staffingRecommendationsList: StaffingRecommendationRow[];
  readonly totalProjectedUtilizationDeltaDecimal: number; // expected increase in billability
  readonly anticipatedPracticeMarginImprovementDecimal: number;
  readonly activeStatusFlag: boolean;
  readonly calculatedAt: Date;
}
