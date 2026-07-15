import { ExecutionLifecycleState } from '../core/execution-lifecycle.js';

export interface ExecutionStepRecord {
  readonly stepId: string; // References execution-step in planning
  readonly assignedAgentId: string; // Active Digital Employee executing this step
  readonly status: ExecutionLifecycleState;
  readonly payloadParametersJson?: string;
  readonly resultOutputJson?: string;
  readonly failureReasonMessage?: string;
  readonly actualDurationMs?: number;
  readonly startedAt?: Date;
  readonly completedAt?: Date;
}
