export interface ExecutiveDashboard {
  readonly dashboardId: string;
  readonly businessPerformanceRatingScore: number; // overall rating e.g. 1-100
  readonly totalFinancialSavingsChf: number;
  readonly countOfActiveTenants: number;
  readonly globalSlaAdherencePercent: number;
  readonly generalSafetyTrustScoreIndex: number; // 0.0 - 100.0
  readonly aggregateActiveWorkforceCount: number;
  readonly compiledAt: Date;
}
