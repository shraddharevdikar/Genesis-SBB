export type ProjectStatusCode = 'NOT_STARTED' | 'IN_FLIGHT' | 'ON_HOLD' | 'COMPLETED' | 'CANCELLED';

export type ProjectHealthStatus = 'GREEN_HEALTHY' | 'AMBER_CONCERNED' | 'RED_CRITICAL';

export interface Project {
  readonly projectId: string;
  readonly uniqueProjectCode: string; // e.g. "PRJ-CLOUD-ACME-01"
  readonly associatedEngagementIdString: string; // Links to Engagement
  readonly projectTitleString: string;
  readonly practiceAreaCode: string; // Practice driving delivery
  readonly projectManagerStaffRoleIdString: string; // Assigned PM (HROS)
  readonly clientSponsorNameString?: string;
  readonly targetStartDate: Date;
  readonly targetEndDate: Date;
  readonly budgetAllocatedAmount: number; // Project specific baseline budget (FinanceOS)
  readonly actualCostToDateAmountDecimal: number; // Actual hours * cost rates recorded
  readonly currentStatus: ProjectStatusCode;
  readonly currentHealth: ProjectHealthStatus;
  readonly riskRatingScoreDecimal: number; // 0.0 (no risk) to 1.0 (high failure threat)
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
