export interface AutomationPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-AUT-FIN-SIGN"
  readonly maximumPermittedRiskLevel: 'LOW_RISK' | 'MEDIUM_RISK' | 'HIGH_RISK_MANUAL_REVIEW';
  readonly restrictedHoursExecutionFlag: boolean;
  readonly complianceDisclaimerStatementText?: string;
  readonly auditVerificationReferenceURI?: string; // references packages/business-policies
}
