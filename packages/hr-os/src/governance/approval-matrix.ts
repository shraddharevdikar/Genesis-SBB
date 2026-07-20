export type ApprovalWorkflowActionCode =
  | 'WORKFORCE_PLAN_CREATION'
  | 'REQUISITION_OPENING'
  | 'OFFER_LETTER_DISPATCH'
  | 'PERFORMANCE_PROMOTION_CONFIRMATION'
  | 'CONTRACT_TERMINATION_EXECUTION';

export interface ApprovalStep {
  readonly stepNumber: number;
  readonly requiredOperatorRoleTypeString: 'DEPARTMENT_MANAGER' | 'HR_BUSINESS_PARTNER' | 'CHRO' | 'FINANCE_DIRECTOR' | 'CEO';
  readonly isParallelFlag: boolean; // Multiple roles can approve in parallel
}

export interface ApprovalMatrix {
  readonly matrixId: string;
  readonly uniqueMatrixCode: string; // e.g. "MTX-OFFER-LEVEL-8"
  readonly workflowActionType: ApprovalWorkflowActionCode;
  readonly appliesToGradeLevelOrAboveString?: string; // e.g., applied to levels >= "L8"
  readonly monetaryValueThresholdAmount?: number; // e.g. offer packages over 250,000 CHF
  readonly thresholdCurrencyCode?: string;
  readonly stepsList: ApprovalStep[];
  readonly lastUpdatedAt: Date;
}
