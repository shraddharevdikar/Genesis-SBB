export interface CapacityPlanSegment {
  readonly resourceCategoryCode: string; // e.g. "DEV-SENIOR" or "GPU-VM-T4"
  readonly baselineAvailableQuantity: number;
  readonly forecastRequiredQuantity: number;
  readonly gapQuantity: number; // calculated shortfall/excess
}

export interface CapacityPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "CAP-2026-Q3-GLOBAL"
  readonly associatedObjectiveIdString?: string;
  readonly displayName: string;
  readonly targetFiscalPeriodCode: string; // e.g. "2026-Q3"
  readonly segmentsList: CapacityPlanSegment[];
  readonly isFeasibleFlag: boolean; // Gap check state
  readonly approvedByOperatorRoleId?: string;
  readonly calculatedAt: Date;
}
