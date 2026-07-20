import { DashboardId } from '../identity/dashboard-id.js';
import { DashboardViewId } from '../identity/dashboard-view-id.js';
import { DashboardView } from '../views/dashboard-view.js';
import { DashboardLifecycle } from '../core/dashboard-lifecycle.js';
import { DashboardVersion } from '../core/dashboard-version.js';

export type DashboardCategoryCode =
  | 'EXECUTIVE_STRATEGY'
  | 'DEPARTMENT_OPERATIONS'
  | 'PROCESS_COMPLIANCE'
  | 'AI_AGENT_WORKFORCE'
  | 'OPERATIONAL_SLA_REALTIME'
  | 'BUSINESS_HEALTH_ORGANIZATION';

export interface BusinessDashboard {
  readonly dashboardId: DashboardId;
  readonly tenantId: string;
  readonly uniqueDashboardCode: string; // e.g. "DSH-FIN-CORP"
  readonly displayName: string;
  readonly summaryDescription: string;
  readonly category: DashboardCategoryCode;
  readonly defaultActiveViewId: DashboardViewId;
  readonly viewsList: DashboardView[];
  readonly version: DashboardVersion;
  readonly lifecycle: DashboardLifecycle;
}
