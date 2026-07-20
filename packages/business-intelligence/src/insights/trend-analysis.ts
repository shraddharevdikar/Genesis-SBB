import { BusinessInsight } from './business-insight.js';

export type TrendDirectionCode = 'UPWARD_GROWTH' | 'DOWNWARD_DECLINE' | 'STABLE_PLATEAU' | 'VOLATILE_FLUCTUATION';

export interface TrendAnalysis extends BusinessInsight {
  readonly observedDirection: TrendDirectionCode;
  readonly historicalDataPointsCount: number;
  readonly measuredPeriodDaysCount: number; // e.g. 30, 90, 365
  readonly averageChangePercentageRate: number; // e.g. +14.5 or -2.3
  readonly seasonalityDetectedFlag: boolean;
}
