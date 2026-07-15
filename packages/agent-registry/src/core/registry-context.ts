export interface RegistryContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly performedByRoleId: string; // The supervisor committing directory mutations
  readonly ipAddress?: string;
  readonly timestamp: Date;
}
