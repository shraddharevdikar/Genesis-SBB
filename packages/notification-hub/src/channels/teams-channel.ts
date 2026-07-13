import { NotificationInstanceId } from '../identity/notification-instance-id.js';

export interface TeamsMetadata {
  readonly tenantId: string;
  readonly defaultChannelWebhookUrl?: string;
  readonly useAdaptiveCards: boolean;
}

export interface TeamsChannelPayload {
  readonly instanceId: NotificationInstanceId;
  readonly channelWebhookUrl?: string; // Target specific Teams channel incoming webhook
  readonly adaptiveCardSchema?: Record<string, any>; // Office 365 Adaptive Card visual JSON format
  readonly simpleText?: string;
}

export interface TeamsChannel {
  readonly channelId: string;
  readonly tenantId: string;
  readonly metadata: TeamsMetadata;
  readonly isActive: boolean;
}
