import { SystemHealthState } from '../core/monitoring-state.js';

export interface SchedulingHealth {
  readonly engineId: string;
  readonly status: SystemHealthState;
  readonly scheduledTriggersActiveCount: number;
  readonly averageTriggerJitterMs: number; // discrepancy between scheduled and actual trigger time
  readonly missedTriggersCount: number;
  readonly timezoneSyncErrorsCount: number;
  readonly lastEvaluatedAt: Date;
}
