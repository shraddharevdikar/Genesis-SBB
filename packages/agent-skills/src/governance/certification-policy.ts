export interface CertificationPolicy {
  readonly policyId: string;
  readonly category: string;
  readonly requiredAuditScoresRatio: number; // e.g., 0.95 success rate
  readonly requiredSupervisorsApprovalCount: number; // e.g. 2-manager approval
  readonly certificationValidityDurationDays: number; // e.g. 365 days before re-evaluation
}
