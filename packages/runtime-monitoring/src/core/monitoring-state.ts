import { MonitoringId } from '../identity/monitoring-id.js';

export type SystemHealthState = 'HEALTHY' | 'DEGRADED' | 'UNHEALTHY' | 'CRITICAL';

export interface MonitoringState {
  readonly monitoringId: MonitoringId;
  readonly tenantId: string;
  readonly overallState: SystemHealthState;
  readonly lastEvaluatedAt: Date;
  readonly activeAlertsCount: number;
  readonly breachedSlasCount: number;
  readonly systemLoadIndicator: number; // 0.0 - 1.0 (percentage scale representing resource overhead)
}
