export interface CultureHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly engagementIndexPercent: number; // e.g. 78.5
  readonly voluntaryAttritionRatePercent: number; // e.g. 8.2
  readonly flightRiskCount: number; // estimated high retention risks
  readonly inclusiveCultureScore: number; // 0 to 100
  readonly psychologicalSafetyScore: number; // 0 to 100
  readonly changeReadinessScore: number; // 0 to 100
  readonly lastReviewedAt: Date;
}
