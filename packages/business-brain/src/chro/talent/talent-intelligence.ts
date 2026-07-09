export interface SkillAssessment {
  readonly skillName: string;
  readonly category: 'TECHNICAL' | 'LEADERSHIP' | 'DOMAIN' | 'OPERATIONAL';
  readonly internalSoughtCount: number;
  readonly marketAvailabilityScore: number; // 0 to 100
}

export interface TalentIntelligence {
  readonly intelligenceId: string;
  readonly tenantId: string;
  readonly measuredAt: Date;
  readonly internalSkillInventory: SkillAssessment[];
  readonly leadershipPotentialScorePercent: number;
  readonly highPotentialEmployeeCount: number;
  readonly internalMobilityRatePercent: number; // e.g. 15.5% lateral/promoted moves
}
