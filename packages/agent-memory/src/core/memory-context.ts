export interface MemoryContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly performedByRoleId: string; // The specific role profile requesting memory interaction (e.g. "SBB_SAFETY_SUPERVISOR")
  readonly timestamp: Date;
}
