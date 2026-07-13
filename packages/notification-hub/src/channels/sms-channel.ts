import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface SmsMetadata {
  readonly senderId?: string; // Alphanumeric Sender ID representing branding
  readonly originationNumber?: string; // Shortcode or Longcode
  readonly routingRegion: string;
}

export interface SmsChannelPayload {
  readonly instanceId: NotificationInstanceId;
  readonly recipientPhoneNumber: string; // E.164 formatted number
  readonly messageText: string;
  readonly encoding: 'GSM_7BIT' | 'UCS2';
  readonly carrierRoutingId?: string;
}

export interface SmsChannel {
  readonly channelId: string;
  readonly tenantId: string;
  readonly metadata: SmsMetadata;
  readonly isActive: boolean;
}
