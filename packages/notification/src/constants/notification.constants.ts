export const NOTIFICATION_CHANNELS = {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  WHATSAPP: 'WHATSAPP',
  PUSH: 'PUSH',
  IN_APP: 'IN_APP',
} as const;

export type NotificationChannel = (typeof NOTIFICATION_CHANNELS)[keyof typeof NOTIFICATION_CHANNELS];

export const NOTIFICATION_STATUS = {
  QUEUED: 'QUEUED',
  PROCESSING: 'PROCESSING',
  DELIVERED: 'DELIVERED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  RETRYING: 'RETRYING',
  EXPIRED: 'EXPIRED',
} as const;

export type NotificationStatus = (typeof NOTIFICATION_STATUS)[keyof typeof NOTIFICATION_STATUS];

export const NOTIFICATION_PRIORITY = {
  LOW: 'LOW',
  NORMAL: 'NORMAL',
  HIGH: 'HIGH',
  URGENT: 'URGENT',
  EMERGENCY: 'EMERGENCY',
} as const;

export type NotificationPriority = (typeof NOTIFICATION_PRIORITY)[keyof typeof NOTIFICATION_PRIORITY];

export const DIGEST_MODE = {
  IMMEDIATE: 'IMMEDIATE',
  DAILY_DIGEST: 'DAILY_DIGEST',
  WEEKLY_DIGEST: 'WEEKLY_DIGEST',
} as const;

export type DigestMode = (typeof DIGEST_MODE)[keyof typeof DIGEST_MODE];

export const NOTIFICATION_EVENTS = {
  QUEUED: 'notification.queued',
  SENT: 'notification.sent',
  DELIVERED: 'notification.delivered',
  FAILED: 'notification.failed',
  RETRIED: 'notification.retried',
  CANCELLED: 'notification.cancelled',
} as const;

export const DEFAULT_RETRY_POLICY = {
  maxRetries: 3,
  initialDelayMs: 1000,
  backoffFactor: 2,
  maxDelayMs: 60000,
};
