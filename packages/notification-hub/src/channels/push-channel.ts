import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface PushMetadata {
  readonly soundFile?: string;
  readonly badgeCountIncrement: boolean;
  readonly contentAvailable: boolean;
}

export interface PushChannelPayload {
  readonly instanceId: NotificationInstanceId;
  readonly deviceToken: string;
  readonly platform: 'IOS' | 'ANDROID' | 'WEB';
  readonly title: string;
  readonly body: string;
  readonly categoryId?: string; // Actionable Push custom identifier
  readonly dataPayload?: Record<string, string>;
}

export interface PushChannel {
  readonly channelId: string;
  readonly tenantId: string;
  readonly metadata: PushMetadata;
  readonly isActive: boolean;
}
