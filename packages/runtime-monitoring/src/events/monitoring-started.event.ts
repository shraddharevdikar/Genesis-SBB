import { MonitoringId } from '../identity/monitoring-id.js';

export interface MonitoringStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly monitoringId: MonitoringId;
  readonly sessionId: string;
  readonly scope: 'GLOBAL' | 'TENANT' | 'ENGINE' | 'BUSINESS_PROCESS';
  readonly triggeredByRoleId: string;
  readonly timestamp: Date;
}
