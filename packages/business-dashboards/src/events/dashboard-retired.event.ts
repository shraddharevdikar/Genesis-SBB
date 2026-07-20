import { DashboardId } from '../identity/dashboard-id.js';

export interface DashboardRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredDashboardId: DashboardId;
  readonly uniqueDashboardCode: string;
  readonly retiredByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
