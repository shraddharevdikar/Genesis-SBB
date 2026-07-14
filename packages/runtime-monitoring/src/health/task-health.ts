import { SystemHealthState } from '../core/monitoring-state.js';

export interface TaskHealth {
  readonly engineId: string;
  readonly status: SystemHealthState;
  readonly pendingTasksCount: number;
  readonly executingTasksCount: number;
  readonly averageTaskTurnaroundTimeMs: number;
  readonly maxQueueDelayMs: number;
  readonly deadLetteredTasksCount: number;
  readonly lastEvaluatedAt: Date;
}
