import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface WebhookMetadata {
  readonly targetUrl: string;
  readonly signatureHeaderName: string; // Header holding HMAC signature
  readonly hmacSecretKeyVaultReference: string; // Secure reference to decryption key
}

export interface WebhookChannelPayload {
  readonly instanceId: NotificationInstanceId;
  readonly eventName: string;
  readonly tenantId: string;
  readonly recipientId: string;
  readonly payload: Record<string, any>;
  readonly timestamp: Date;
}

export interface WebhookChannel {
  readonly channelId: string;
  readonly tenantId: string;
  readonly metadata: WebhookMetadata;
  readonly isActive: boolean;
}
