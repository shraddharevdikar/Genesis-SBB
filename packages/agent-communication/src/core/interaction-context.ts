export interface InteractionContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly originChannelCode: string; // e.g. "SBB_MOBILE", "SBB_INTERNAL_SERVICE_DESK"
  readonly initiatedByRoleId: string; // The SBB operational role triggers interaction
  readonly timestamp: Date;
}
