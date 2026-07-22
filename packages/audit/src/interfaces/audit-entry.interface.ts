export interface IAuditEntry {
  id: string;
  timestamp: Date;
  tenantId?: string | null;
  organizationId?: string | null;
  userId?: string | null;
  actorId: string;
  sessionId?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  resourceType?: string | null;
  resourceId?: string | null;
  action: string;
  status?: string | null;
  severity?: string | null;
  beforeState?: any;
  afterState?: any;
  payload: any;
  metadata?: any;
  correlationId?: string | null;
}
