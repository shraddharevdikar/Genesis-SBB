import { Dependency } from './dependency.js';

export interface WorkAllocation {
  readonly allocationId: string;
  readonly taskId: string;
  readonly participantId: string; // The assigned worker
  readonly title: string;
  readonly status: 'UNASSIGNED' | 'ASSIGNED' | 'ACTIVE' | 'BLOCKED' | 'COMPLETED' | 'VALIDATED';
  readonly effortEstimateHours: number;
  readonly dependentConditionsList: Dependency[];
  readonly allocatedAt: Date;
  readonly completedAt?: Date;
}
