export type ApprovalConditionCode =
  | 'SPENDING_LIMIT_OVER_LIMIT'
  | 'POLICY_BYPASS_ATTEMPT'
  | 'CROSS_DEPARTMENT_BOUNDARY_BREACH'
  | 'HIGH_RISK_AUDIT_REQUIRED';

export interface ApprovalCondition {
  readonly conditionId: string;
  readonly typeCode: ApprovalConditionCode;
  readonly thresholdLimitAmountChf?: number;
  readonly triggerPolicyReferenceIdString?: string;
  readonly riskScoreThresholdRating?: number; // e.g. 4 or 5
  readonly isTriggeredAutomatically: boolean;
}
