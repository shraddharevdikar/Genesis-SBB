export interface BantCriteria {
  readonly hasAllocatedBudgetFlag: boolean;
  readonly budgetEstimationAmount?: number;
  readonly budgetCurrencyCode?: string;
  readonly hasDecisionAuthorityFlag: boolean;
  readonly identifiedBusinessNeedNotes: string;
  readonly plannedPurchaseTimelineMonthsCount?: number;
}

export interface LeadQualification {
  readonly qualificationId: string;
  readonly criteriaBant: BantCriteria;
  readonly isQualifiedFlag: boolean;
  readonly qualificationNotes: string;
  readonly qualifiedByOperatorRoleId?: string;
  readonly qualifiedAt?: Date;
}
