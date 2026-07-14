import { MonitoringId } from '../identity/monitoring-id.js';

export type SessionStatus = 'ACTIVE' | 'PAUSED' | 'COMPLETED' | 'TERMINATED';

export interface MonitoringSession {
  readonly sessionId: string;
  readonly monitoringId: MonitoringId;
  readonly tenantId: string;
  readonly status: SessionStatus;
  readonly startedAt: Date;
  readonly endedAt?: Date;
  readonly durationMs?: number;
  readonly collectedSamplesCount: number;
  readonly lastSampleTime?: Date;
}
