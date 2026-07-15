import { ManagerReference } from './manager-reference.js';

export interface ReportingLine {
  readonly reportingLineId: string;
  readonly agentId: string;
  readonly directManager: ManagerReference;
  readonly secondaryReviewer?: ManagerReference; // For dual 4-eyes approval escalations
  readonly escalationRoleId: string; // fallback SBB operations group role ID
}
