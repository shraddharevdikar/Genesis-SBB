import { DashboardId } from '../identity/dashboard-id.js';

export interface DashboardContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activeDashboardId?: DashboardId;
  readonly deviceTypeCode: 'DESKTOP' | 'TABLET' | 'MOBILE' | 'AI_AGENT_API';
  readonly localeCode: string; // e.g. "de-CH", "en-US"
  readonly timestamp: Date;
}
