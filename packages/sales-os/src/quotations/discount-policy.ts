export interface DiscountPolicy {
  readonly policyId: string;
  readonly uniqueDiscountPolicyCode: string; // e.g. "DSC-POLICY-EMEA-REP"
  readonly maxAutonomousDiscountPercentageDecimal: number; // e.g. 0.15 (15% without approval)
  readonly requiresSalesVpApprovalThresholdPercentageDecimal: number; // e.g. 0.25 (25%+)
  readonly requiresCfoApprovalThresholdPercentageDecimal: number; // e.g. 0.40 (40%+)
  readonly standardPartnerDiscountPercentageDecimal: number; // default for partner channels
  readonly isStrictlyEnforcedFlag: boolean;
}
