import { ExecutionLifecycleState } from '../core/execution-lifecycle.js';

export interface ExecutionPhaseReference {
  readonly phaseId: string; // References ExecutionPhase phaseId from @sbb/agent-planning
  readonly sequenceNumber: number;
  readonly title: string;
  readonly status: ExecutionLifecycleState;
  readonly startedAt?: Date;
  readonly completedAt?: Date;
}
