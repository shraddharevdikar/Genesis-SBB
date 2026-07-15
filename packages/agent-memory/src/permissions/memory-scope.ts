export type ScopeClassification = 
  | 'TENANT_ALL'          // Multi-tenant isolation boundary
  | 'DEPARTMENT_COHORT'   // Restricted to specific department (e.g. SBB Cargo)
  | 'ROLE_CLASSIFIED'     // Restricted to specific supervisor roles
  | 'AGENT_OWNED'         // Restricted to only the executing digital employee session
  | 'STRICT_CONFIDENTIAL';// Extra multi-manager permission approval required

export interface MemoryScope {
  readonly scopeId: string;
  readonly scopeCode: string; // e.g. "CH.SBB.FINANCE.PAYROLL"
  readonly classification: ScopeClassification;
  readonly encryptionKeyReferenceId?: string;
  readonly activeSupervisorSignoffsCount: number;
}
