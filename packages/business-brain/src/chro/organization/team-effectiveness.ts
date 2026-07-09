export interface TeamEffectivenessMetric {
  readonly teamId: string;
  readonly teamName: string;
  readonly collaborationScore: number; // 0 to 100
  readonly goalAlignmentPercent: number; // e.g., 85
  readonly communicationFrictionScore: number; // 0 to 100
  readonly retentionScore: number; // 0 to 100
}

export interface TeamEffectiveness {
  readonly effectivenessId: string;
  readonly tenantId: string;
  readonly evaluatedAt: Date;
  readonly teamsList: TeamEffectivenessMetric[];
  readonly overallCollaborationAverage: number;
  readonly criticalAlignmentGapsCount: number;
}
