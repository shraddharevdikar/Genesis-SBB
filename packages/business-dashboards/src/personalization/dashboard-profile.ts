import { DashboardPreference } from './dashboard-preference.js';
import { DashboardFilter } from './dashboard-filter.js';

export interface DashboardProfile {
  readonly profileId: string;
  readonly uniqueProfileCode: string; // e.g. "PROF-FIN-CFO-APAC"
  readonly associatedOperatorRoleId: string;
  readonly preferences: DashboardPreference;
  readonly activeGlobalFiltersList: DashboardFilter[];
  readonly lastActiveAt: Date;
}
