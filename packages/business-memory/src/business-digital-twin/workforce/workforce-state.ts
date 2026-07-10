import { LeadershipState } from './leadership-state.js';

export interface WorkforceDemographics {
  readonly totalFtes: number;
  readonly totalContractors: number;
  readonly attritionRateYtdPercent: number;
  readonly employeeEngagementScore: number; // 0 to 100
}

export interface WorkforceState {
  readonly demographics: WorkforceDemographics;
  readonly departmentBreakdown: Array<{
    readonly departmentId: string;
    readonly departmentCode: string;
    readonly headcount: number;
  }>;
  readonly leadershipState: LeadershipState;
  readonly generalSentimentIndicator: 'OPTIMISTIC' | 'NEUTRAL' | 'APATHETIC' | 'STRESSED';
}
