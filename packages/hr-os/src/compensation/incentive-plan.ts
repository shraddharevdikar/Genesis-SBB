export type IncentiveModelTypeCode =
  | 'SALES_COMMISSION_TIERED'
  | 'ANNUAL_MANAGEMENT_BONUS_POOL'
  | 'DISCRETIONARY_SPOT_RECOGNITION'
  | 'EQUITY_NEW_HIRE_GRANT';

export interface IncentivePlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "INC-2026-ENG-MGT"
  readonly incentiveModelType: IncentiveModelTypeCode;
  readonly associatedEmployeeIdString?: string; // If undefined, applies to entire grade or team
  readonly targetPayoutAmount: number;
  readonly maximumPayoutCapAmount: number;
  readonly currencyCode: string;
  readonly performanceCriteriaDescriptionText: string;
  readonly vestingScheduleCodeString?: string;
  readonly isTriggeredFlag: boolean;
  readonly calculatedPayoutAmount?: number;
  readonly approvedByOperatorRoleId?: string;
  readonly paymentScheduledDate?: Date;
}
