import { NotificationChannel, NotificationStatus, NotificationPriority, DigestMode } from '../constants/notification.constants.js';

export interface INotification {
  id: string;
  tenantId?: string | null;
  organizationId?: string | null;
  userId?: string | null;
  recipient: string;
  channel: NotificationChannel;
  templateId?: string | null;
  title?: string | null;
  content: string;
  metadata?: Record<string, any> | null;
  status: NotificationStatus;
  priority: NotificationPriority;
  retryCount: number;
  maxRetries: number;
  lastError?: string | null;
  scheduledAt?: Date | null;
  sentAt?: Date | null;
  deliveredAt?: Date | null;
  failedAt?: Date | null;
  providerLatency?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface INotificationTemplate {
  id: string;
  name: string;
  code: string;
  channel: NotificationChannel;
  subject?: string | null;
  body: string;
  variables?: string[] | null;
  tenantId?: string | null;
  organizationId?: string | null;
  isSystem: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IQuietHours {
  enabled: boolean;
  start: string; // e.g. "22:00"
  end: string;   // e.g. "07:00"
  timezone?: string;
}

export interface INotificationPreference {
  id: string;
  userId: string;
  tenantId?: string | null;
  organizationId?: string | null;
  channels: Record<string, boolean>;
  quietHours?: IQuietHours | null;
  language: string;
  timezone: string;
  digestMode: DigestMode;
  emergencyOverride: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITenantNotificationSettings {
  id: string;
  tenantId: string;
  defaultSender?: {
    email?: string;
    name?: string;
    phoneNumber?: string;
  } | null;
  branding?: {
    logoUrl?: string;
    primaryColor?: string;
    emailFooter?: string;
  } | null;
  policies?: {
    allowEmergencyOverride?: boolean;
    quietHoursEnforced?: boolean;
    maxBatchSize?: number;
  } | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDeliveryMetrics {
  totalSent: number;
  totalDelivered: number;
  totalFailed: number;
  totalRetried: number;
  averageLatencyMs: number;
  queueSize: number;
  successRate: number;
  failureRate: number;
}
