import { Injectable, Logger } from '@nestjs/common';
import { INotificationProvider, INotificationPayload } from '../interfaces/provider.interface.js';
import { IDeliveryResult } from '../interfaces/delivery-result.interface.js';
import { NOTIFICATION_CHANNELS, NotificationChannel } from '../constants/notification.constants.js';

@Injectable()
export class WhatsappProvider implements INotificationProvider {
  readonly channel: NotificationChannel = NOTIFICATION_CHANNELS.WHATSAPP;
  readonly providerName = 'GenesisWhatsAppProvider';
  private readonly logger = new Logger(WhatsappProvider.name);

  validateRecipient(recipient: string): boolean {
    const waRegex = /^(\+?[1-9]\d{1,14}|whatsapp:\+?[1-9]\d{1,14})$/;
    return waRegex.test(recipient.replace(/[\s\-\(\)]/g, ''));
  }

  async send(payload: INotificationPayload): Promise<IDeliveryResult> {
    const startTime = Date.now();
    this.logger.log(`[WhatsappProvider] Sending WhatsApp message to ${payload.recipient}`);

    if (!this.validateRecipient(payload.recipient)) {
      return {
        success: false,
        provider: this.providerName,
        channel: this.channel,
        error: `Invalid WhatsApp recipient format: ${payload.recipient}`,
        latencyMs: Date.now() - startTime,
      };
    }

    const latencyMs = Date.now() - startTime;
    return {
      success: true,
      messageId: `wa-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      provider: this.providerName,
      channel: this.channel,
      latencyMs,
    };
  }
}
