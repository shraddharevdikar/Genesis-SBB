export interface PlanDependency {
  readonly dependencyId: string;
  readonly prerequisiteResourceUri: string; // e.g. "sbb-skill://pack-005" or "sbb-system://db-02"
  readonly dependencyType: 'RESOURCE_AVAILABILITY' | 'TIMELINE_ORDER' | 'SKILL_CLEARANCE';
  readonly resolutionStrategyDescription: string;
}

export interface DependencyAnalysis {
  readonly analysisId: string;
  readonly targetGoalId: string;
  readonly detectedDependenciesList: PlanDependency[];
  readonly hasUnresolvedCircularDependencies: boolean;
  readonly analyzedAt: Date;
}
