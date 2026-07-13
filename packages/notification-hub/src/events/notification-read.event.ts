import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface NotificationReadEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: NotificationInstanceId;
  readonly recipientId: string;
  readonly readAt: Date;
  readonly deviceType?: string; // e.g., "MOBILE", "DESKTOP"
  readonly timestamp: Date;
}
