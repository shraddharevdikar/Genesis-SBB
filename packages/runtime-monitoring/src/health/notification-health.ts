import { SystemHealthState } from '../core/monitoring-state.js';

export interface NotificationHealth {
  readonly hubId: string;
  readonly status: SystemHealthState;
  readonly queuedNotificationsCount: number;
  readonly channelDeliveriesSucceededCount: Record<string, number>; // e.g. { EMAIL: 24, SMS: 52 }
  readonly channelDeliveriesFailedCount: Record<string, number>;
  readonly overallBounceRatePercentage: number;
  readonly averageTransitLatencyMs: number;
  readonly lastEvaluatedAt: Date;
}
