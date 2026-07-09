export interface LeadershipCoreCompetency {
  readonly competencyName: string; // e.g. "STRATEGIC_THINKING", "PEOPLE_DEVELOPMENT"
  readonly averageScore: number; // 1.0 to 5.0
  readonly targetScore: number; // 1.0 to 5.0
}

export interface LeadershipCapability {
  readonly capabilityId: string;
  readonly tenantId: string;
  readonly leadershipTier: 'EXECUTIVE_COUNCIL' | 'V_AND_D_LEVEL' | 'MIDDLE_MANAGEMENT';
  readonly criticalLeadershipFTECount: number;
  readonly coreCompetencies: LeadershipCoreCompetency[];
  readonly successorsReadyPercent: number;
  readonly highRiskRetentionLeadersCount: number;
  readonly measuredAt: Date;
}
