import { DashboardId } from '../identity/dashboard-id.js';

export interface DashboardCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly dashboardId: DashboardId;
  readonly uniqueDashboardCode: string;
  readonly displayName: string;
  readonly categoryCode: string;
  readonly createdByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
