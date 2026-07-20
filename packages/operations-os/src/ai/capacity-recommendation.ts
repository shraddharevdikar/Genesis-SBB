export interface ResourceAllocationShift {
  readonly resourceCategoryCode: string;
  readonly recommendedDeltaQuantity: number; // e.g. +2 devs, -1 container
  readonly targetDepartmentIdString: string;
}

export interface CapacityRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g. "REC-CAP-2026-A"
  readonly associatedPlanIdString: string;
  readonly rationaleText: string;
  readonly suggestedShiftsList: ResourceAllocationShift[];
  readonly estimatedCostDeltaAmount: number;
  readonly currencyCode: string;
  readonly appliedFlag: boolean;
  readonly appliedByOperatorRoleId?: string;
  readonly calculatedAt: Date;
}
