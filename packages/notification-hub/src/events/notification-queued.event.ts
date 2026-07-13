import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface NotificationQueuedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: NotificationInstanceId;
  readonly notificationId: string;
  readonly recipientId: string;
  readonly selectedChannel: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  readonly correlationId?: string;
  readonly timestamp: Date;
}
