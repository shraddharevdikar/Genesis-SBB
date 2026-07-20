import { ProjectLifecycleState } from '../core/operations-lifecycle.js';

export interface ProjectId {
  readonly value: string;
}

export interface Project {
  readonly projectId: ProjectId;
  readonly uniqueProjectCode: string; // e.g. "PRJ-MIGRATION-S3"
  readonly displayName: string;
  readonly businessSponsorRoleIdString: string;
  readonly projectManagerRoleIdString: string;
  readonly currentPhaseIdString?: string;
  readonly state: ProjectLifecycleState;
  readonly estBudgetCostAmount: number;
  readonly currencyCode: string;
  readonly actualSpendCostAmount: number;
  readonly plannedStartDate: Date;
  readonly plannedEndDate: Date;
  readonly progressRatioDecimal: number; // e.g. 0.65 for 65% completion
  readonly createdAt: Date;
}
