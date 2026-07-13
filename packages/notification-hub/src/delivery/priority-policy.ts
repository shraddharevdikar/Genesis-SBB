import { NotificationId } from '../identity/notification-id.js';

export interface PriorityPolicy {
  readonly priorityPolicyId: string;
  readonly tenantId: string;
  readonly notificationId?: NotificationId;
  readonly classification: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  readonly bypassQuietHours: boolean;
  readonly bypassDeduplicationRules: boolean;
  readonly guaranteeInOrderDelivery: boolean;
  readonly maxQueueHoldMinutes: number;
}
