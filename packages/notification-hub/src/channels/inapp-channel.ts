import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface InAppMetadata {
  readonly displayType: 'BANNER' | 'MODAL' | 'FEED_ITEM' | 'TOAST';
  readonly soundAlertEnabled: boolean;
  readonly canDismiss: boolean;
}

export interface InAppChannelPayload {
  readonly instanceId: NotificationInstanceId;
  readonly targetUserId: string;
  readonly title: string;
  readonly body: string;
  readonly callToActionUrl?: string;
  readonly actionLabel?: string;
  readonly category?: string;
  readonly customMetadata?: Record<string, any>;
}

export interface InAppChannel {
  readonly channelId: string;
  readonly tenantId: string;
  readonly metadata: InAppMetadata;
  readonly isActive: boolean;
}
