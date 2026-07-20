export type MarketingPolicyRiskCode =
  | 'LOW_BRAND_RISK'
  | 'MEDIUM_LEGAL_EXPOSURE'
  | 'HIGH_GDPR_BREACH'
  | 'CRITICAL_CANSPAM_VIOLATION';

export interface MarketingPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-GDPR-OPT-IN"
  readonly displayName: string;
  readonly policyDescriptionNotes: string;
  readonly riskClassification: MarketingPolicyRiskCode;
  readonly ruleExpressionText: string; // declarative validation expression
  readonly actionToTriggerOnBreachCode: 'BLOCK_CAMPAIGN_LAUNCH' | 'SEND_GOVERNANCE_ALERT' | 'AUTO_PAUSE_AD_SPEND';
  readonly isStrictlyEnforcedFlag: boolean;
}
