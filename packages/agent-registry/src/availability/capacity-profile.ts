export interface CapacityProfile {
  readonly profileId: string;
  readonly maxConcurrentGoals: number; // e.g. maximum 5 parallel goals
  readonly maxQueuedTasks: number; // backlog limits
  readonly activeResourceAllocationRatio: number; // resource multiplier (0.1 - 1.0)
}
