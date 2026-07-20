export type BalancedPerspectiveType =
  | 'FINANCIAL'
  | 'CUSTOMER_MARKET'
  | 'INTERNAL_PROCESSES'
  | 'ORGANIZATIONAL_LEARNING_GROWTH';

export interface ScorecardMetric {
  readonly metricId: string;
  readonly perspective: BalancedPerspectiveType;
  readonly uniqueKpiCode: string;
  readonly displayName: string;
  readonly currentValDecimal: number;
  readonly targetValDecimal: number;
  readonly achievementRatioDecimal: number; // currentVal / targetVal
  readonly status: 'UNDERPERFORMING_CRITICAL' | 'ON_TRACK' | 'EXCEEDING_TARGET';
}

export interface EnterpriseScorecard {
  readonly scorecardId: string;
  readonly uniqueScorecardCode: string; // e.g. "BSC-2026-Q2-GLOBAL"
  readonly reportingPeriodString: string; // e.g. "2026-Q2"
  readonly metricsList: ScorecardMetric[];
  readonly overallIndexValueDecimal: number; // aggregate achievement score
  readonly signedOffByExecutiveRoleIdString?: string;
  readonly lastCalculatedAt: Date;
}
