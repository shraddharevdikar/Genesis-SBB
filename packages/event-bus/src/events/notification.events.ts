import { BaseDomainEvent } from './base.event.js';
import { EVENT_TYPES } from '../constants/event.constants.js';

export interface NotificationSentPayload {
  notificationId: string;
  recipient: string;
  channel: 'EMAIL' | 'SMS' | 'PUSH' | 'SLACK';
  title: string;
}

export class NotificationSentEvent extends BaseDomainEvent<NotificationSentPayload> {
  constructor(data: Omit<BaseDomainEvent<NotificationSentPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Notification Sent',
      eventType: EVENT_TYPES.NOTIFICATION_SENT,
    });
  }
}
