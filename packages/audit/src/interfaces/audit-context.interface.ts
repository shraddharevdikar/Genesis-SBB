export interface IAuditContext {
  tenantId?: string;
  organizationId?: string;
  userId?: string;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
  correlationId?: string;
}
