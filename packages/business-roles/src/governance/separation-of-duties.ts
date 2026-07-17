export interface SeparationOfDuties {
  readonly sodId: string;
  readonly uniqueRuleCode: string; // e.g. "SOD-FIN-PAYMENT"
  readonly primaryActionCode: string; // e.g. "CREATE_INVOICE"
  readonly conflictingActionCode: string; // e.g. "APPROVE_INVOICE"
  readonly restrictedRoleTitleCodesList: string[]; // e.g. ["FINANCIAL_ANALYST"] can only do one
  readonly enforceHardFailureResponse: boolean;
}
