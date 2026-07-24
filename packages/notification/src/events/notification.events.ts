import { BaseDomainEvent } from '@sbb/event-bus';
import { NOTIFICATION_EVENTS } from '../constants/notification.constants.js';

export interface NotificationEventPayload {
  notificationId: string;
  recipient: string;
  channel: string;
  title?: string | null;
  content?: string;
  status?: string;
  error?: string | null;
  retryCount?: number;
  scheduledAt?: Date | null;
  deliveredAt?: Date | null;
  failedAt?: Date | null;
  providerLatency?: number | null;
  metadata?: Record<string, any> | null;
}

export class NotificationQueuedEvent extends BaseDomainEvent<NotificationEventPayload> {
  constructor(data: Omit<BaseDomainEvent<NotificationEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'notification-service',
      eventName: 'Notification Queued',
      eventType: NOTIFICATION_EVENTS.QUEUED,
    });
  }
}

export class NotificationSentEvent extends BaseDomainEvent<NotificationEventPayload> {
  constructor(data: Omit<BaseDomainEvent<NotificationEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'notification-service',
      eventName: 'Notification Sent',
      eventType: NOTIFICATION_EVENTS.SENT,
    });
  }
}

export class NotificationDeliveredEvent extends BaseDomainEvent<NotificationEventPayload> {
  constructor(data: Omit<BaseDomainEvent<NotificationEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'notification-service',
      eventName: 'Notification Delivered',
      eventType: NOTIFICATION_EVENTS.DELIVERED,
    });
  }
}

export class NotificationFailedEvent extends BaseDomainEvent<NotificationEventPayload> {
  constructor(data: Omit<BaseDomainEvent<NotificationEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'notification-service',
      eventName: 'Notification Failed',
      eventType: NOTIFICATION_EVENTS.FAILED,
    });
  }
}

export class NotificationRetriedEvent extends BaseDomainEvent<NotificationEventPayload> {
  constructor(data: Omit<BaseDomainEvent<NotificationEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'notification-service',
      eventName: 'Notification Retried',
      eventType: NOTIFICATION_EVENTS.RETRIED,
    });
  }
}

export class NotificationCancelledEvent extends BaseDomainEvent<NotificationEventPayload> {
  constructor(data: Omit<BaseDomainEvent<NotificationEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'notification-service',
      eventName: 'Notification Cancelled',
      eventType: NOTIFICATION_EVENTS.CANCELLED,
    });
  }
}
