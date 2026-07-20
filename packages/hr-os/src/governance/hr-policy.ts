export type PolicyCategoryCode =
  | 'RECRUITMENT_COMPLIANCE'
  | 'COMPENSATION_CEILING_CONTROL'
  | 'ONBOARDING_MANDATORY_TRAINING'
  | 'LEAVE_ABSENCE_LIMITS'
  | 'TERMINATION_LEGAL_RISK_CHECK';

export interface HRPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-HR-CH-NOTICE"
  readonly displayName: string;
  readonly category: PolicyCategoryCode;
  readonly targetGeographicJurisdictionCode: string; // e.g. "CH" or "CH-ZH"
  readonly ruleExpressionJSON: string; // Evaluated at runtime
  readonly mitigationStepsDescriptionText: string; // Action if violated
  readonly enforcementLevel: 'SOFT_RECOMMENDATION' | 'HARD_APPROVAL_GATED' | 'STRICT_BLOCK_NON_COMPLIANT';
  readonly isApprovedFlag: boolean;
  readonly lastModifiedAt: Date;
}
