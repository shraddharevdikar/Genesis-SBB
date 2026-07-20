export interface AuditFinding {
  readonly findingId: string;
  readonly uniqueFindingCode: string; // e.g. "FND-AUD-02-01"
  readonly associatedAuditIdString: string;
  readonly descriptionText: string;
  readonly severityLevel: 'OBSERVATION_MINOR' | 'REMEDY_RECOMMENDED' | 'CRITICAL_NON_COMPLIANCE';
  readonly requirementIdString?: string; // links back to regulatory requirement
  readonly controlIdString?: string; // links back to compliance control
  readonly evidenceDocURI?: string;
  readonly resolvedFlag: boolean;
  readonly resolvedAt?: Date;
}
