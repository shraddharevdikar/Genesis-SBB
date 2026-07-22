export interface IDomainEvent<P = any, M = any> {
  id: string;
  eventName: string;
  eventType: string;
  tenantId?: string | null;
  organizationId?: string | null;
  userId?: string | null;
  correlationId?: string | null;
  causationId?: string | null;
  timestamp: Date;
  version: number;
  source: string;
  payload: P;
  metadata?: M | null;
}
