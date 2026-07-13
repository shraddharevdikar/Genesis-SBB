import { NotificationId } from '../identity/notification-id.js';

export interface ChannelLatency {
  readonly channelType: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly avgQueueDurationSeconds: number;
  readonly avgTransitDurationSeconds: number; // Send trigger to Delivered callback
}

export interface DeliveryPerformance {
  readonly performanceId: string;
  readonly tenantId: string;
  readonly notificationId?: NotificationId;
  readonly latencies: ChannelLatency[];
  readonly lastCalculatedAt: Date;
}
