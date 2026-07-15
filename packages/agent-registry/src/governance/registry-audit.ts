export interface RegistryAudit {
  readonly auditId: string;
  readonly tenantId: string;
  readonly agentId: string;
  readonly actionType: 'REGISTER' | 'TRANSFER_DEPARTMENT' | 'ASSIGN_MANAGER' | 'RETIRE' | 'UPDATE_METADATA';
  readonly performedByRoleId: string; // The SBB supervisor who committed the change
  readonly previousStateSnapshot?: string; // JSON snapshot of state
  readonly newStateSnapshot: string; // JSON snapshot of state
  readonly justificationNotes: string; // Mandatory architectural/regulatory justification
  readonly timestamp: Date;
}
