import { BusinessScorecard } from './business-scorecard.js';

export interface ExecutiveScorecard {
  readonly baseScorecard: BusinessScorecard;
  readonly overallStrategicAlignmentScore: number; // e.g. 0.0 - 1.0 (or 0 - 100)
  readonly enterpriseGrowthKpiRatio: number;
}
