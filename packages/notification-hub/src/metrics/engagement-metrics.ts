import { NotificationId } from '../identity/notification-id.js';

export interface EngagementMetrics {
  readonly engagementId: string;
  readonly tenantId: string;
  readonly notificationId: NotificationId;
  readonly totalSentCount: number;
  readonly totalDeliveredCount: number;
  readonly totalFailedCount: number;
  readonly totalReadCount: number;
  readonly deliveryRatePercentage: number;
  readonly readRatePercentage: number;
  readonly optOutRatePercentage: number;
  readonly lastCalculatedAt: Date;
}
