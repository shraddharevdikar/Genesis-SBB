import { EventInstanceId } from '../identity/event-instance-id.js';

export interface EventAudit {
  readonly auditId: string;
  readonly instanceId: EventInstanceId;
  readonly tenantId: string;
  readonly actionType: 'EVENT_REGISTERED' | 'EVENT_PUBLISHED' | 'ROUTE_MATCHED' | 'MESSAGE_ACKED' | 'MESSAGE_FAILED' | 'DLQ_MOVED' | 'RETENTION_PRUNED';
  readonly triggeredByRoleId?: string;
  readonly payloadHash: string; // SHA-256 for compliance audits
  readonly consumerId?: string;
  readonly details: string;
  readonly timestamp: Date;
}
