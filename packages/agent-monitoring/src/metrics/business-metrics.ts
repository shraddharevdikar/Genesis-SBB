export interface BusinessMetrics {
  readonly metricId: string;
  readonly tenantId: string;
  readonly targetOutcomeGoalAchievedPercent: number; // 0.0 - 100.0
  readonly estimatedCostReductionChf: number;
  readonly continuousImprovementRatePercent: number;
  readonly humanInterventionBypassRatio: number; // How often agents resolved steps without manual intervention
  readonly resourceUtilizationEfficiencyPercent: number;
  readonly computedAt: Date;
}
