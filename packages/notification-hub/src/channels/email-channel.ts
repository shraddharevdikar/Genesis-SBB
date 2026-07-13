import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface EmailMetadata {
  readonly senderAddress: string;
  readonly senderName?: string;
  readonly replyToAddress?: string;
  readonly feedbackLoopEnabled: boolean;
}

export interface EmailChannelPayload {
  readonly instanceId: NotificationInstanceId;
  readonly toAddress: string;
  readonly subject: string;
  readonly htmlBody: string;
  readonly textBody: string;
  readonly ccAddresses?: string[];
  readonly bccAddresses?: string[];
  readonly attachments?: Array<{
    readonly fileName: string;
    readonly mimeType: string;
    readonly base64Content: string;
  }>;
}

export interface EmailChannel {
  readonly channelId: string;
  readonly tenantId: string;
  readonly metadata: EmailMetadata;
  readonly isActive: boolean;
}
