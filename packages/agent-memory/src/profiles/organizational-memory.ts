import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface OrganizationalMemory {
  readonly referenceId: MemoryReferenceId;
  readonly departmentId: string; // SBB Division (e.g., SBB Cargo, SBB Infrastructure)
  readonly standardOperatingProcedureCode: string;
  readonly regulatoryActUri?: string;
  readonly contentSummary: string;
  readonly effectiveDate: Date;
}
