export interface WinProbability {
  readonly probabilityId: string;
  readonly salesRepSubjectiveProbabilityDecimal: number; // e.g. 0.50 (50%)
  readonly aiModelPredictiveProbabilityDecimal: number; // e.g. 0.63 (63%)
  readonly appliedBlendedProbabilityDecimal: number; // e.g. 0.55 (weighted or average)
  readonly aiConfidenceIntervalLowerBoundDecimal: number;
  readonly aiConfidenceIntervalUpperBoundDecimal: number;
  readonly generalDealHealthRatingCode: 'HEALTHY' | 'STAGNANT_RISK' | 'SLIPPING_TIMELINE' | 'COMPETITIVE_THREAT';
  readonly lastAssessmentAt: Date;
}
