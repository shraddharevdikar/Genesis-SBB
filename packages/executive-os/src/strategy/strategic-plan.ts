export type StrategicPlanState =
  | 'DRAFTING'
  | 'BOARD_REVIEW'
  | 'ACTIVE_COMMITTED'
  | 'SUPERSEDED_ARCHIVED'
  | 'SUSPENDED';

export interface StrategicPlanId {
  readonly value: string;
}

export interface StrategicPlan {
  readonly planId: StrategicPlanId;
  readonly uniquePlanCode: string; // e.g. "STR-PLAN-2026-2030"
  readonly displayName: string;
  readonly fiscalStartYear: number;
  readonly fiscalEndYear: number;
  readonly overallObjectiveDescriptionText: string;
  readonly currentPlanState: StrategicPlanState;
  readonly authorExecutiveRoleIdString: string; // e.g. "CEO"
  readonly lastModifiedAt: Date;
  readonly createdAt: Date;
}
