export interface SourcedProductDemandForecastRow {
  readonly itemIdString: string;
  readonly periodLabelText: string; // e.g. "2026-Q4", "OCT-2026"
  readonly forecastedDemandQuantityCount: number;
  readonly recommendedSourcingQuantityCount: number;
}

export interface ProcurementPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g., "PPL-2026-Q3-Q4"
  readonly planDisplayNameString: string;
  readonly planningHorizonStartDate: Date;
  readonly planningHorizonEndDate: Date;
  readonly demandForecastRowsList: SourcedProductDemandForecastRow[];
  readonly totalCapitalBudgetAllocatedAmount: number; // Links to FinanceOS budget code
  readonly totalCapitalBudgetRemainingAmount: number;
  readonly activeStatusFlag: boolean;
  readonly approvedByStaffRoleIdString?: string; // Links to ExecutiveOS/HROS
  readonly lastModifiedAt: Date;
}
