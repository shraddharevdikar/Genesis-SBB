export interface BusinessObjective {
  readonly objectiveId: string;
  readonly initiativeId?: string; // links optionally to a strategic initiative
  readonly title: string; // e.g. "Increase ARR by 25%"
  readonly metricCategory: 'REVENUE' | 'EFFICIENCY' | 'CHURN' | 'MARKET_SHARE' | 'RETENTION' | 'CAPABILITY';
  readonly targetValue: number;
  readonly actualValue: number;
  readonly kpiName: string;
  readonly isAchieved: boolean;
  readonly measuredPeriod: string; // e.g. "FY2026-Q3"
}
