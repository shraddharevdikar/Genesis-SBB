import { MonitoringId } from '../identity/monitoring-id.js';
import { MonitoringLifecycleState } from './monitoring-lifecycle.js';

export interface MonitoringSession {
  readonly sessionId: string;
  readonly monitoringId: MonitoringId;
  readonly tenantId: string;
  readonly targetFleetsList: string[]; // List of specific agent tags, departments, or scopes under surveillance
  readonly state: MonitoringLifecycleState;
  readonly establishedAt: Date;
  readonly lastHeartbeatReceivedAt: Date;
}
