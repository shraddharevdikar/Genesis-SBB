import { Injectable, Logger } from '@nestjs/common';
import { INotificationProvider, INotificationPayload } from '../interfaces/provider.interface.js';
import { IDeliveryResult } from '../interfaces/delivery-result.interface.js';
import { NOTIFICATION_CHANNELS, NotificationChannel } from '../constants/notification.constants.js';

@Injectable()
export class PushProvider implements INotificationProvider {
  readonly channel: NotificationChannel = NOTIFICATION_CHANNELS.PUSH;
  readonly providerName = 'GenesisPushProvider';
  private readonly logger = new Logger(PushProvider.name);

  validateRecipient(recipient: string): boolean {
    return typeof recipient === 'string' && recipient.trim().length > 0;
  }

  async send(payload: INotificationPayload): Promise<IDeliveryResult> {
    const startTime = Date.now();
    this.logger.log(`[PushProvider] Sending push notification to ${payload.recipient}`);

    if (!this.validateRecipient(payload.recipient)) {
      return {
        success: false,
        provider: this.providerName,
        channel: this.channel,
        error: `Invalid push device token / recipient: ${payload.recipient}`,
        latencyMs: Date.now() - startTime,
      };
    }

    const latencyMs = Date.now() - startTime;
    return {
      success: true,
      messageId: `push-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      provider: this.providerName,
      channel: this.channel,
      latencyMs,
    };
  }
}
