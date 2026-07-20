import { BusinessDashboard } from './business-dashboard.js';

export interface ExecutiveDashboard extends BusinessDashboard {
  readonly strategyBoardResolutionCode?: string; // e.g. "RES-BOARD-2026-Q1"
  readonly containsKpiTargetsFlag: boolean;
  readonly isAuthorizedForCSuiteOnly: boolean;
  readonly executiveDepartmentOwnerIdString: string; // e.g. "DEP-FINANCE"
}
