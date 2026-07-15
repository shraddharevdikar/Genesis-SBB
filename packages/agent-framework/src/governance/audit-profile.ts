export interface AuditProfile {
  readonly auditId: string;
  readonly recordDetailedThoughtProcess: boolean; // Deep logging trace files
  readonly logStoreDestination: string; // e.g., "ImmutableLedgerStore"
  readonly retainLogsDays: number;
  readonly traceSignatureRequired: boolean; // Cryptographically signs agent execution logs
}
