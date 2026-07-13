import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface SlackMetadata {
  readonly workspaceName: string;
  readonly defaultChannelId?: string;
  readonly botUsername?: string;
  readonly botIconEmoji?: string;
}

export interface SlackChannelPayload {
  readonly instanceId: NotificationInstanceId;
  readonly channelId: string; // Slack-specific channel ID or User ID (DM)
  readonly text: string;
  readonly blocks?: Array<Record<string, any>>; // Slack block kit UI schemas support
  readonly threadTs?: string; // Support threading conversation traces
}

export interface SlackChannel {
  readonly channelId: string;
  readonly tenantId: string;
  readonly metadata: SlackMetadata;
  readonly isActive: boolean;
}
