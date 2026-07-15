export interface Specialization {
  readonly specializationId: string;
  readonly name: string; // e.g. "Invoice Reconciliations", "Train Path Scheduling Optimization"
  readonly domainCode: string; // e.g. "CH.SBB.FINANCE" or "CH.SBB.RAIL"
  readonly industryStandardCodes?: string[]; // e.g. ["ISO-20022", "FINMA-2026"]
}
