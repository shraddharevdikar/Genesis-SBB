import { Injectable, Logger } from '@nestjs/common';
import { INotificationProvider, INotificationPayload } from '../interfaces/provider.interface.js';
import { IDeliveryResult } from '../interfaces/delivery-result.interface.js';
import { NOTIFICATION_CHANNELS, NotificationChannel } from '../constants/notification.constants.js';

@Injectable()
export class SmsProvider implements INotificationProvider {
  readonly channel: NotificationChannel = NOTIFICATION_CHANNELS.SMS;
  readonly providerName = 'GenesisSmsProvider';
  private readonly logger = new Logger(SmsProvider.name);

  validateRecipient(recipient: string): boolean {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(recipient.replace(/[\s\-\(\)]/g, ''));
  }

  async send(payload: INotificationPayload): Promise<IDeliveryResult> {
    const startTime = Date.now();
    this.logger.log(`[SmsProvider] Sending SMS to ${payload.recipient}`);

    if (!this.validateRecipient(payload.recipient)) {
      return {
        success: false,
        provider: this.providerName,
        channel: this.channel,
        error: `Invalid phone recipient format: ${payload.recipient}`,
        latencyMs: Date.now() - startTime,
      };
    }

    const latencyMs = Date.now() - startTime;
    return {
      success: true,
      messageId: `sms-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      provider: this.providerName,
      channel: this.channel,
      latencyMs,
      metadata: {
        segmentCount: Math.ceil(payload.content.length / 160) || 1,
      },
    };
  }
}
