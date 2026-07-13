import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface NotificationAudit {
  readonly auditId: string;
  readonly instanceId: NotificationInstanceId;
  readonly tenantId: string;
  readonly eventPerformed: 'NOTIFICATION_CREATED' | 'NOTIFICATION_QUEUED' | 'NOTIFICATION_DELIVERED' | 'NOTIFICATION_FAILED' | 'NOTIFICATION_READ' | 'NOTIFICATION_BOUNCED' | 'NOTIFICATION_SUPPRESSED';
  readonly recipientId: string;
  readonly channelUsed: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly triggeredByRoleId?: string;
  readonly payloadHash: string; // SHA-256 hash of variables to support compliance verification without storing private variables plain-text
  readonly executionDelaySeconds: number;
  readonly details: string;
  readonly timestamp: Date;
}
