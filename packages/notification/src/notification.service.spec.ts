import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

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
import { NOTIFICATION_CHANNELS, NOTIFICATION_STATUS, NOTIFICATION_PRIORITY } from './constants/notification.constants.js';

describe('NotificationService', () => {
  let service: NotificationService;
  let templateService: NotificationTemplateService;
  let preferenceService: NotificationPreferenceService;

  beforeEach(() => {
    const notifRepo = new NotificationRepository();
    const templateRepo = new TemplateRepository();
    const prefRepo = new PreferenceRepository();

    const emailProvider = new EmailProvider();
    const smsProvider = new SmsProvider();
    const waProvider = new WhatsappProvider();
    const pushProvider = new PushProvider();
    const inAppProvider = new InAppProvider();

    const dispatcher = new NotificationDispatcherService(
      emailProvider,
      smsProvider,
      waProvider,
      pushProvider,
      inAppProvider
    );

    const queue = new NotificationQueueService(notifRepo);
    const engine = new TemplateEngineService();
    const renderer = new TemplateRendererService(engine);

    templateService = new NotificationTemplateService(templateRepo, engine, renderer);
    preferenceService = new NotificationPreferenceService(prefRepo);
    const tracker = new DeliveryTrackerService();

    service = new NotificationService(
      notifRepo,
      dispatcher,
      queue,
      templateService,
      preferenceService,
      tracker
    );
  });

  it('should successfully send an email notification', async () => {
    const res = await service.send({
      recipient: 'user@example.com',
      channel: NOTIFICATION_CHANNELS.EMAIL,
      title: 'Welcome',
      content: 'Welcome to Genesis SBB!',
    });

    assert.equal(res.status, NOTIFICATION_STATUS.DELIVERED);
    assert.equal(res.channel, NOTIFICATION_CHANNELS.EMAIL);
    assert.ok(res.sentAt);
  });

  it('should auto-detect EMAIL channel if recipient is an email address', async () => {
    const res = await service.send({
      recipient: 'developer@genesis-sbb.io',
      content: 'Auto detect email test',
    });

    assert.equal(res.channel, NOTIFICATION_CHANNELS.EMAIL);
    assert.equal(res.status, NOTIFICATION_STATUS.DELIVERED);
  });

  it('should send a template-rendered notification', async () => {
    await templateService.createTemplate({
      name: 'Welcome Email',
      code: 'WELCOME_EMAIL',
      channel: NOTIFICATION_CHANNELS.EMAIL,
      subject: 'Hello {{name}}',
      body: 'Welcome to {{platform}}, {{name}}!',
    });

    const res = await service.send({
      recipient: 'john@example.com',
      templateCode: 'WELCOME_EMAIL',
      variables: { name: 'John Doe', platform: 'Genesis SBB' },
    });

    assert.equal(res.title, 'Hello John Doe');
    assert.equal(res.content, 'Welcome to Genesis SBB, John Doe!');
    assert.equal(res.status, NOTIFICATION_STATUS.DELIVERED);
  });

  it('should schedule future notifications in QUEUED status', async () => {
    const futureDate = new Date(Date.now() + 60000).toISOString();
    const res = await service.schedule({
      recipient: 'user@example.com',
      channel: NOTIFICATION_CHANNELS.EMAIL,
      content: 'Future notification',
      scheduledAt: futureDate,
    });

    assert.equal(res.status, NOTIFICATION_STATUS.QUEUED);
  });

  it('should support batch notification dispatch', async () => {
    const res = await service.sendBatch({
      notifications: [
        { recipient: 'user1@example.com', content: 'Msg 1' },
        { recipient: 'user2@example.com', content: 'Msg 2' },
      ],
    });

    assert.equal(res.length, 2);
    assert.equal(res[0].status, NOTIFICATION_STATUS.DELIVERED);
    assert.equal(res[1].status, NOTIFICATION_STATUS.DELIVERED);
  });

  it('should enforce tenant isolation when fetching history', async () => {
    await service.send({ recipient: 'tenantA@example.com', content: 'Tenant A msg' }, 'tenant-A');
    await service.send({ recipient: 'tenantB@example.com', content: 'Tenant B msg' }, 'tenant-B');

    const historyA = await service.getHistory({}, 'tenant-A');
    assert.equal(historyA.total, 1);
    assert.equal(historyA.items[0].recipient, 'tenantA@example.com');
  });

  it('should respect emergency override for disabled channels', async () => {
    const userId = 'user-emergency-test';
    await preferenceService.updatePreference({
      userId,
      channels: { [NOTIFICATION_CHANNELS.EMAIL]: false },
      emergencyOverride: true,
    });

    const res = await service.send({
      userId,
      recipient: 'user@example.com',
      channel: NOTIFICATION_CHANNELS.EMAIL,
      content: 'Critical System Alert!',
      priority: NOTIFICATION_PRIORITY.EMERGENCY,
    });

    assert.equal(res.status, NOTIFICATION_STATUS.DELIVERED);
  });

  it('should support workflow notification helper', async () => {
    const res = await service.sendWorkflowNotification({
      recipient: '+12025550123',
      content: 'Workflow approval requested',
    });

    assert.equal(res.channel, NOTIFICATION_CHANNELS.SMS);
    assert.equal(res.status, NOTIFICATION_STATUS.DELIVERED);
  });
});
