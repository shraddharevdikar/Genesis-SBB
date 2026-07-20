import { DashboardId } from '../identity/dashboard-id.js';

export interface DashboardUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly dashboardId: DashboardId;
  readonly uniqueDashboardCode: string;
  readonly updatedMajorVersion: number;
  readonly updatedMinorVersion: number;
  readonly changedByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
