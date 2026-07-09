export interface DependencyLink {
  readonly dependencyId: string;
  readonly upstreamStageId: string;
  readonly downstreamStageId: string;
  readonly type: 'FINISH_TO_START' | 'START_TO_START' | 'FINISH_TO_FINISH';
  readonly isCriticalPath: boolean;
}

export interface DependencyMap {
  readonly mapId: string;
  readonly planId: string;
  readonly dependencies: DependencyLink[];
}
