export interface WorkforceRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly proposedCapacityAction: 'HIRE_EXPANSION' | 'ROLE_REALIGNMENT' | 'SKILL_UPSKILLING' | 'REDUCE_OVERTIME';
  readonly estimatedFteDeltaCount: number;
  readonly estimatedCostImpactUSD: number;
  readonly implementationTimeframeWeeks: number;
  readonly severityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface TalentRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly targetedSkillGap: string;
  readonly proposedDevelopmentAction: string;
  readonly estimatedBudgetUSD: number;
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface LeadershipRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly targetLeaderRole: string;
  readonly transitionPlanSummary: string;
  readonly riskRatingOfSuccession: 'LOW' | 'MEDIUM' | 'HIGH';
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface OrganizationalHealthSummary {
  readonly summaryId: string;
  readonly title: string;
  readonly description: string;
  readonly overallEngagementIndex: number;
  readonly voluntaryAttritionRatePercent: number;
  readonly criticalRetentionRisksCount: number;
  readonly keyAreasForImprovement: string[];
}
