export interface RouteOptimizedAlternative {
  readonly alternativeSequenceIndex: number;
  readonly workCenterIdString: string;
  readonly expectedSetupMinutesDecimal: number;
  readonly expectedRunMinutesPerUnitDecimal: number;
}

export interface ProductionOptimizationRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g. "OPT-REC-STAMPING-04"
  readonly focusAreaDescription: string;
  readonly bottleneckWorkCenterIdString: string;
  readonly alternativesList: RouteOptimizedAlternative[];
  readonly predictedThroughtputIncreasePercentageDecimal: number; // e.g. 0.08 (8%)
  readonly rationalBasisText: string;
  readonly calculatedAt: Date;
}
