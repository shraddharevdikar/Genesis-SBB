import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface NotificationFailedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: NotificationInstanceId;
  readonly recipientId: string;
  readonly channelAttempted: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly errorCode: string; // e.g. "BOUNCED", "PROVIDER_TIMEOUT", "OPTED_OUT", "INVALID_ADDRESS"
  readonly errorMessage: string;
  readonly retryCount: number;
  readonly timestamp: Date;
}
