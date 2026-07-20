import { DashboardId } from '../identity/dashboard-id.js';

export interface DashboardPublishedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly dashboardId: DashboardId;
  readonly uniqueDashboardCode: string;
  readonly versionSemanticString: string;
  readonly publishedByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
