import { SystemHealthState } from '../core/monitoring-state.js';

export interface EventHealth {
  readonly engineId: string;
  readonly status: SystemHealthState;
  readonly eventThroughputPerSecond: number;
  readonly subscriptionBacklogCount: number;
  readonly validationFailuresCount: number;
  readonly deadLetterQueueBacklogCount: number;
  readonly lastEvaluatedAt: Date;
}
