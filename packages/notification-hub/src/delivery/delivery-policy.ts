import { NotificationId } from '../identity/notification-id.js';

export interface DeliveryPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly notificationId?: NotificationId; // Specific notification override, or global if empty
  readonly allowedChannels: Array<'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK'>;
  readonly primaryChannel: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly fallbackChannels: Array<'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK'>;
  readonly fallbackDelayMinutes: number; // Delay before trying secondary channel if primary fails
  readonly deduplicationWindowSeconds?: number; // Throttle repetitive requests
}
