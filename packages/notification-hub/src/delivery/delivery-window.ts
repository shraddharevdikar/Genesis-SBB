import { NotificationId } from '../identity/notification-id.js';

export interface DeliveryWindow {
  readonly windowId: string;
  readonly tenantId: string;
  readonly notificationId?: NotificationId;
  readonly allowedDaysOfWeek: number[]; // 0-6 (Sunday-Saturday)
  readonly startHour: number; // 0-23
  readonly startMinute: number; // 0-59
  readonly endHour: number; // 0-23
  readonly endMinute: number; // 0-59
  readonly actionOnOutsideWindow: 'QUEUE' | 'DROP' | 'UPGRADE_TO_URGENT_OR_SEND';
}
