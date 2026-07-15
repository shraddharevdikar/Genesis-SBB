export interface AuditRequirement {
  readonly requirementId: string;
  readonly code: string; // e.g. "SBB_AUDIT_LOG_IMMUTABILITY_REQUIREMENT"
  readonly targetArtifactFieldsList: string[]; // List of fields that MUST be logged in the immutable ledger
  readonly retentionDurationDays: number; // e.g. 365 or 2555
  readonly isCryptographicSigningRequired: boolean;
  readonly descriptionText: string;
}
