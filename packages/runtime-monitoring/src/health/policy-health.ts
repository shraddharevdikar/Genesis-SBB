import { SystemHealthState } from '../core/monitoring-state.js';

export interface PolicyHealth {
  readonly engineId: string;
  readonly status: SystemHealthState;
  readonly evaluationsExecutedCount: number;
  readonly deniedEvaluationsCount: number;
  readonly activeOverridesCount: number;
  readonly averageEvaluationLatencyMs: number;
  readonly lastEvaluatedAt: Date;
}
