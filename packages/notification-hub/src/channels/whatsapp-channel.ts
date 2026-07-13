import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface WhatsAppMetadata {
  readonly businessPhoneNumberId: string;
  readonly wabaAccountId: string; // WhatsApp Business Account ID
  readonly templateNamespace?: string;
}

export interface WhatsAppChannelPayload {
  readonly instanceId: NotificationInstanceId;
  readonly recipientPhoneNumber: string; // E.164 formatted number
  readonly templateName: string;
  readonly locale: string;
  readonly components: Array<{
    readonly type: 'HEADER' | 'BODY' | 'BUTTON';
    readonly parameters: Array<Record<string, any>>;
  }>;
}

export interface WhatsAppChannel {
  readonly channelId: string;
  readonly tenantId: string;
  readonly metadata: WhatsAppMetadata;
  readonly isActive: boolean;
}
