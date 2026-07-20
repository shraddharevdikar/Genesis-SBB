export interface WorkforcePlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "PLN-WRK-2026-GLOBAL"
  readonly displayName: string;
  readonly planningFiscalYear: number;
  readonly targetHeadcountQuantity: number;
  readonly activePositionsHeadcountCount: number;
  readonly totalPlannedCompensationBudgetAmount: number;
  readonly currencyCode: string; // e.g. "CHF"
  readonly strategicPlanningNotes: string;
  readonly isApprovedFlag: boolean;
  readonly lastReviewedAt?: Date;
  readonly createdAt: Date;
}
