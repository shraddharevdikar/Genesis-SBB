export type FinancePolicyRiskCode =
  | 'LOW_OPERATIONAL_EXPOSURE'
  | 'MEDIUM_DISCREPANCY_RISK'
  | 'HIGH_REGULATORY_COMPLIANCE_RISK'
  | 'CRITICAL_ANTI_BRIBERY_VIOLATION';

export interface FinancePolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-ANTI-BRIBERY-CHECK"
  readonly displayName: string;
  readonly policyDescriptionNotes: string;
  readonly riskClassification: FinancePolicyRiskCode;
  readonly ruleExpressionText: string; // Declarative validation criteria (DSL/string)
  readonly actionToTriggerOnBreachCode: 'BLOCK_PAYMENT' | 'FORCE_MULTI_DIRECTOR_APPROVAL' | 'SEND_COMPLIANCE_ALERT';
  readonly isStrictlyEnforcedFlag: boolean;
}
