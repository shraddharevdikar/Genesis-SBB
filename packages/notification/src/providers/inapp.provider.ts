import { Injectable, Logger } from '@nestjs/common';
import { INotificationProvider, INotificationPayload } from '../interfaces/provider.interface.js';
import { IDeliveryResult } from '../interfaces/delivery-result.interface.js';
import { NOTIFICATION_CHANNELS, NotificationChannel } from '../constants/notification.constants.js';

@Injectable()
export class InAppProvider implements INotificationProvider {
  readonly channel: NotificationChannel = NOTIFICATION_CHANNELS.IN_APP;
  readonly providerName = 'GenesisInAppProvider';
  private readonly logger = new Logger(InAppProvider.name);

  validateRecipient(recipient: string): boolean {
    return typeof recipient === 'string' && recipient.trim().length > 0;
  }

  async send(payload: INotificationPayload): Promise<IDeliveryResult> {
    const startTime = Date.now();
    this.logger.log(`[InAppProvider] Delivering in-app notification to user ${payload.recipient}`);

    if (!this.validateRecipient(payload.recipient)) {
      return {
        success: false,
        provider: this.providerName,
        channel: this.channel,
        error: `Invalid user ID for in-app delivery: ${payload.recipient}`,
        latencyMs: Date.now() - startTime,
      };
    }

    const latencyMs = Date.now() - startTime;
    return {
      success: true,
      messageId: `inapp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      provider: this.providerName,
      channel: this.channel,
      latencyMs,
      metadata: {
        read: false,
        deliveredAt: new Date().toISOString(),
      },
    };
  }
}
