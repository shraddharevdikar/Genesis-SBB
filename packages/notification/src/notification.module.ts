import { Module } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';

import { NotificationController } from './notification.controller.js';
import { NotificationService } from './notification.service.js';
import { NotificationDispatcherService } from './notification-dispatcher.service.js';
import { NotificationQueueService } from './notification-queue.service.js';
import { NotificationTemplateService } from './notification-template.service.js';
import { NotificationPreferenceService } from './notification-preference.service.js';
import { DeliveryTrackerService } from './delivery-tracker.service.js';

import { TemplateEngineService } from './templates/template-engine.service.js';
import { TemplateRendererService } from './templates/template-renderer.service.js';

import { NotificationRepository } from './repositories/notification.repository.js';
import { TemplateRepository } from './repositories/template.repository.js';
import { PreferenceRepository } from './repositories/preference.repository.js';

import { EmailProvider } from './providers/email.provider.js';
import { SmsProvider } from './providers/sms.provider.js';
import { WhatsappProvider } from './providers/whatsapp.provider.js';
import { PushProvider } from './providers/push.provider.js';
import { InAppProvider } from './providers/inapp.provider.js';

@Module({
  controllers: [NotificationController],
  providers: [
    DatabaseService,
    NotificationRepository,
    TemplateRepository,
    PreferenceRepository,
    EmailProvider,
    SmsProvider,
    WhatsappProvider,
    PushProvider,
    InAppProvider,
    TemplateEngineService,
    TemplateRendererService,
    DeliveryTrackerService,
    NotificationPreferenceService,
    NotificationTemplateService,
    NotificationQueueService,
    NotificationDispatcherService,
    NotificationService,
  ],
  exports: [
    NotificationService,
    NotificationDispatcherService,
    NotificationQueueService,
    NotificationTemplateService,
    NotificationPreferenceService,
    DeliveryTrackerService,
  ],
})
export class NotificationModule {}
