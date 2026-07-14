import { MonitoringId } from '../identity/monitoring-id.js';

export interface MonitoringContext {
  readonly monitoringId: MonitoringId;
  readonly tenantId: string;
  readonly scope: 'GLOBAL' | 'TENANT' | 'ENGINE' | 'BUSINESS_PROCESS';
  readonly targetEngineId?: string; // e.g. "WorkflowEngine" or "NotificationHub"
  readonly initiatedByRoleId: string;
  readonly traceId?: string;
  readonly metadata: Record<string, string>;
  readonly createdAt: Date;
}
