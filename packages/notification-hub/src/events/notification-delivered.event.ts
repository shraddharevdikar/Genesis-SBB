import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface NotificationDeliveredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: NotificationInstanceId;
  readonly recipientId: string;
  readonly deliveredChannel: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly transitDurationSeconds: number;
  readonly deliveredAt: Date;
  readonly timestamp: Date;
}
