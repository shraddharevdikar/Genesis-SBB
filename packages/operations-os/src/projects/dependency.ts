export type DependencyTypeCode =
  | 'FINISH_TO_START'
  | 'START_TO_START'
  | 'FINISH_TO_FINISH'
  | 'START_TO_FINISH';

export interface ProjectDependency {
  readonly dependencyId: string;
  readonly uniqueDependencyCode: string; // e.g. "DEP-PRJ-01-PRJ-02"
  readonly antecedentEntityIdString: string; // The blocking entity (e.g. task/milestone)
  readonly precedentEntityIdString: string; // The blocked entity
  readonly dependencyType: DependencyTypeCode;
  readonly lagDurationDaysCount: number; // buffer delay
  readonly criticalPathFlag: boolean;
}
