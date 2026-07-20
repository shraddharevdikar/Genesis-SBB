import { AuditRecord } from '../audit/audit-record.js';
import { LegalContext } from '../core/legal-context.js';

export interface AuditCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'AUDIT_COMPLETED';
  readonly payload: {
    readonly audit: AuditRecord;
  };
  readonly context: LegalContext;
}
