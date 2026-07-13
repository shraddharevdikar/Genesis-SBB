import { NotificationInstanceId } from '../identity/notification-instance-id.js';
import { NotificationId } from '../identity/notification-id.js';

export type NotificationStatus = 'DRAFT' | 'QUEUED' | 'SENDING' | 'DELIVERED' | 'FAILED' | 'READ' | 'CANCELLED';

export interface NotificationInstance {
  readonly instanceId: NotificationInstanceId;
  readonly notificationId: NotificationId;
  readonly tenantId: string;
  readonly status: NotificationStatus;
  readonly recipientId: string; // Target user or actor
  readonly selectedChannel: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  readonly retryCount: number;
  readonly sentAt?: Date;
  readonly deliveredAt?: Date;
  readonly readAt?: Date;
  readonly createdAt: Date;
}
