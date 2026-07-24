import { IDeliveryResult } from './delivery-result.interface.js';
import { NotificationChannel } from '../constants/notification.constants.js';

export interface INotificationPayload {
  id: string;
  recipient: string;
  title?: string;
  content: string;
  channel: NotificationChannel;
  metadata?: Record<string, any>;
  tenantId?: string | null;
  organizationId?: string | null;
  userId?: string | null;
  priority?: string;
  sender?: {
    email?: string;
    name?: string;
    phoneNumber?: string;
  };
}

export interface INotificationProvider {
  readonly channel: NotificationChannel;
  readonly providerName: string;
  send(payload: INotificationPayload): Promise<IDeliveryResult>;
  validateRecipient(recipient: string): boolean;
}
