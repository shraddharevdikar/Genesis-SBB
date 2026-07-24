import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { EmailProvider } from './providers/email.provider.js';
import { SmsProvider } from './providers/sms.provider.js';
import { WhatsappProvider } from './providers/whatsapp.provider.js';
import { PushProvider } from './providers/push.provider.js';
import { InAppProvider } from './providers/inapp.provider.js';
import { NOTIFICATION_CHANNELS } from './constants/notification.constants.js';

describe('Notification Providers', () => {
  it('EmailProvider should validate and deliver valid email', async () => {
    const provider = new EmailProvider();
    assert.equal(provider.validateRecipient('valid@domain.com'), true);
    assert.equal(provider.validateRecipient('invalid-email'), false);

    const result = await provider.send({
      id: 'n1',
      recipient: 'valid@domain.com',
      content: 'Email test',
      channel: NOTIFICATION_CHANNELS.EMAIL,
    });

    assert.equal(result.success, true);
    assert.ok(result.messageId);
  });

  it('SmsProvider should validate and deliver phone number', async () => {
    const provider = new SmsProvider();
    assert.equal(provider.validateRecipient('+12025550123'), true);
    assert.equal(provider.validateRecipient('abc'), false);

    const result = await provider.send({
      id: 'n2',
      recipient: '+12025550123',
      content: 'SMS test',
      channel: NOTIFICATION_CHANNELS.SMS,
    });

    assert.equal(result.success, true);
  });

  it('WhatsappProvider should validate and send WhatsApp message', async () => {
    const provider = new WhatsappProvider();
    assert.equal(provider.validateRecipient('whatsapp:+12025550123'), true);

    const result = await provider.send({
      id: 'n3',
      recipient: 'whatsapp:+12025550123',
      content: 'WA test',
      channel: NOTIFICATION_CHANNELS.WHATSAPP,
    });

    assert.equal(result.success, true);
  });

  it('PushProvider and InAppProvider should send payload successfully', async () => {
    const push = new PushProvider();
    const inApp = new InAppProvider();

    const pushRes = await push.send({
      id: 'n4',
      recipient: 'device-token-xyz',
      content: 'Push test',
      channel: NOTIFICATION_CHANNELS.PUSH,
    });

    const inAppRes = await inApp.send({
      id: 'n5',
      recipient: 'user-id-456',
      content: 'In-app test',
      channel: NOTIFICATION_CHANNELS.IN_APP,
    });

    assert.equal(pushRes.success, true);
    assert.equal(inAppRes.success, true);
  });
});
