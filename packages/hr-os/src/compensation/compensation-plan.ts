export interface CompensationPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "CMP-2026-EMP-041"
  readonly associatedEmployeeIdString: string;
  readonly annualBaseSalaryAmount: number;
  readonly targetVariableBonusPercentageDecimal: number; // e.g. 0.15 for 15%
  readonly equityGrantQuantityNumeric: number;
  readonly equityVestingScheduleCodeString: string; // e.g. "4_YEAR_1_YEAR_CLIFF"
  readonly fringeBenefitsAllowanceAmount: number;
  readonly currencyCode: string; // e.g. "CHF"
  readonly currentGradeLevelString: string; // e.g., "L6"
  readonly planStatus: 'DRAFT' | 'ACTIVE' | 'SUPERSEDED' | 'TERMINATED';
  readonly effectiveStartDate: Date;
  readonly effectiveEndDate?: Date;
  readonly lastReviewedByOperatorRoleId: string;
}
