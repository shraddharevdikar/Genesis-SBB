import { MonitoringId } from '../identity/monitoring-id.js';

export interface MonitoringStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly monitoringId: MonitoringId;
  readonly traceId: string;
  readonly timestamp: Date;
}
