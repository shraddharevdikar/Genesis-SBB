import { EventEmitter } from 'events';
import { Injectable } from '@nestjs/common';

export const AUDIT_EVENT_NAMES = {
  CREATED: 'audit.created',
  ACTIVITY_RECORDED: 'audit.activity_recorded',
  SECURITY_ALERT: 'audit.security_alert',
  AUTH_DENIED: 'audit.authorization_denied',
} as const;

@Injectable()
export class AuditEventEmitter extends EventEmitter {
  emitAuditCreated(log: any) {
    this.emit(AUDIT_EVENT_NAMES.CREATED, log);
  }

  emitActivityRecorded(activity: any) {
    this.emit(AUDIT_EVENT_NAMES.ACTIVITY_RECORDED, activity);
  }

  emitSecurityAlert(reason: string, details: any) {
    this.emit(AUDIT_EVENT_NAMES.SECURITY_ALERT, { reason, details, timestamp: new Date() });
  }

  emitAuthorizationDenied(details: any) {
    this.emit(AUDIT_EVENT_NAMES.AUTH_DENIED, { ...details, timestamp: new Date() });
  }
}
