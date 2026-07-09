export interface TeamVelocity {
  readonly teamId: string;
  readonly teamName: string;
  readonly assignedFTECount: number;
  readonly averageSprintVelocityPoints: number;
  readonly platformComplexityMultiplier: number; // e.g., 1.0 - 1.5
}

export interface EngineeringCapacity {
  readonly capacityId: string;
  readonly tenantId: string;
  readonly assessmentPeriod: string; // e.g., "Q3-2026"
  readonly teams: TeamVelocity[];
  readonly totalEngineersCount: number;
  readonly aggregateVelocityPoints: number;
  readonly engineeringUtilizationPercent: number; // 0 to 100
  readonly talentGaps: string[];
  readonly updatedBy: string;
  readonly updatedAt: Date;
}
