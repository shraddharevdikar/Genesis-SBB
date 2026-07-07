export interface AuditContext {
  userId?: string;
  tenantId?: string;
  correlationId?: string;
  clientIp?: string;
  userAgent?: string;
}

export interface AuditEvent {
  readonly id: string;
  readonly action: string;
  readonly status: 'SUCCESS' | 'FAILURE' | string;
  readonly timestamp: string;
  readonly actor: string;
  readonly target?: string;
  readonly context?: AuditContext;
  readonly details?: Record<string, any>;
}

export interface AuditPublisher {
  publish(event: AuditEvent): Promise<void> | void;
}
