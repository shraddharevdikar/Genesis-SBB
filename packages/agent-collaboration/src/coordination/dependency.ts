export interface Dependency {
  readonly dependencyId: string;
  readonly upstreamTaskId: string; // The prerequisite task that must finish
  readonly downstreamTaskId: string; // The blocked task
  readonly dependencyType: 'FINISH_TO_START' | 'START_TO_START' | 'FINISH_TO_FINISH';
  readonly isResolved: boolean;
  readonly resolvedAt?: Date;
}
