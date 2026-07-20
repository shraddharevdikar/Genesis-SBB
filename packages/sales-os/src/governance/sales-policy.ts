export type SalesPolicyRiskCode =
  | 'LOW_OPERATIONAL_RISK'
  | 'MEDIUM_PRICING_EXPOSURE'
  | 'HIGH_EXPORT_CONTROL_BREACH'
  | 'CRITICAL_ANTI_CORRUPTION_VIOLATION';

export interface SalesPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g., "POL-EXPORT-CONTROL-CHECK"
  readonly displayName: string;
  readonly policyDescriptionNotes: string;
  readonly riskClassification: SalesPolicyRiskCode;
  readonly ruleExpressionText: string; // Declarative validation criteria (DSL/string)
  readonly actionToTriggerOnBreachCode: 'BLOCK_QUOTATION_RELEASE' | 'FORCE_EXECUTIVE_APPROVAL' | 'SEND_COMPLIANCE_ALERT';
  readonly isStrictlyEnforcedFlag: boolean;
}
