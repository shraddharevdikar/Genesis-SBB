import { ExecutionStepRecord } from './execution-step.js';

export interface ExecutionProgress {
  readonly executionId: string;
  readonly totalStepsCount: number;
  readonly completedStepsCount: number;
  readonly activeStepId?: string;
  readonly percentageCompleted: number; // 0.0 - 100.0
  readonly stepRecordsList: ExecutionStepRecord[];
  readonly lastCheckpointId?: string;
  readonly lastActiveAt: Date;
}
