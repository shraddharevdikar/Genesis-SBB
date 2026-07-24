import { Injectable, Logger } from '@nestjs/common';
import { INotificationProvider, INotificationPayload } from '../interfaces/provider.interface.js';
import { IDeliveryResult } from '../interfaces/delivery-result.interface.js';
import { NOTIFICATION_CHANNELS, NotificationChannel } from '../constants/notification.constants.js';

@Injectable()
export class EmailProvider implements INotificationProvider {
  readonly channel: NotificationChannel = NOTIFICATION_CHANNELS.EMAIL;
  readonly providerName = 'GenesisEmailProvider';
  private readonly logger = new Logger(EmailProvider.name);

  validateRecipient(recipient: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(recipient);
  }

  async send(payload: INotificationPayload): Promise<IDeliveryResult> {
    const startTime = Date.now();
    this.logger.log(`[EmailProvider] Sending email to ${payload.recipient} - Subject: ${payload.title || 'No Subject'}`);

    if (!this.validateRecipient(payload.recipient)) {
      return {
        success: false,
        provider: this.providerName,
        channel: this.channel,
        error: `Invalid email recipient format: ${payload.recipient}`,
        latencyMs: Date.now() - startTime,
      };
    }

    const latencyMs = Date.now() - startTime;
    return {
      success: true,
      messageId: `email-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      provider: this.providerName,
      channel: this.channel,
      latencyMs,
      metadata: {
        sender: payload.sender?.email || 'noreply@genesis-sbb.io',
        senderName: payload.sender?.name || 'Genesis SBB Platform',
      },
    };
  }
}
