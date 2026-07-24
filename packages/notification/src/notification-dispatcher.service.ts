import { Injectable, Logger, BadRequestException, NotFoundException } from '@nestjs/common';
import { INotificationProvider, INotificationPayload } from './interfaces/provider.interface.js';
import { IDeliveryResult } from './interfaces/delivery-result.interface.js';
import { NotificationChannel } from './constants/notification.constants.js';
import { EmailProvider } from './providers/email.provider.js';
import { SmsProvider } from './providers/sms.provider.js';
import { WhatsappProvider } from './providers/whatsapp.provider.js';
import { PushProvider } from './providers/push.provider.js';
import { InAppProvider } from './providers/inapp.provider.js';

@Injectable()
export class NotificationDispatcherService {
  private readonly logger = new Logger(NotificationDispatcherService.name);
  private readonly providerRegistry: Map<NotificationChannel, INotificationProvider> = new Map();

  constructor(
    private readonly emailProvider: EmailProvider,
    private readonly smsProvider: SmsProvider,
    private readonly whatsappProvider: WhatsappProvider,
    private readonly pushProvider: PushProvider,
    private readonly inAppProvider: InAppProvider
  ) {
    this.registerDefaultProviders();
  }

  private registerDefaultProviders(): void {
    this.registerProvider(this.emailProvider);
    this.registerProvider(this.smsProvider);
    this.registerProvider(this.whatsappProvider);
    this.registerProvider(this.pushProvider);
    this.registerProvider(this.inAppProvider);
  }

  public registerProvider(provider: INotificationProvider): void {
    this.logger.log(`Registering provider ${provider.providerName} for channel ${provider.channel}`);
    this.providerRegistry.set(provider.channel, provider);
  }

  public getProvider(channel: NotificationChannel): INotificationProvider {
    const provider = this.providerRegistry.get(channel);
    if (!provider) {
      throw new NotFoundException(`No provider registered for notification channel: ${channel}`);
    }
    return provider;
  }

  public hasProvider(channel: NotificationChannel): boolean {
    return this.providerRegistry.has(channel);
  }

  public async dispatch(payload: INotificationPayload): Promise<IDeliveryResult> {
    const provider = this.getProvider(payload.channel);

    if (!provider.validateRecipient(payload.recipient)) {
      throw new BadRequestException(`Recipient '${payload.recipient}' is invalid for channel ${payload.channel}`);
    }

    this.logger.log(`Dispatching notification ${payload.id} via provider ${provider.providerName}`);
    return provider.send(payload);
  }
}
