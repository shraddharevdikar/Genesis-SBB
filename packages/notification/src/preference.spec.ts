import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

import { NotificationPreferenceService } from './notification-preference.service.js';
import { PreferenceRepository } from './repositories/preference.repository.js';
import { NOTIFICATION_CHANNELS } from './constants/notification.constants.js';

describe('NotificationPreferenceService', () => {
  let service: NotificationPreferenceService;

  beforeEach(() => {
    const repo = new PreferenceRepository();
    service = new NotificationPreferenceService(repo);
  });

  it('should return default allowed preferences for new user', async () => {
    const allowed = await service.isChannelAllowed('new-user-123', NOTIFICATION_CHANNELS.EMAIL);
    assert.equal(allowed.allowed, true);
  });

  it('should block channel if disabled in preferences', async () => {
    await service.updatePreference({
      userId: 'user-sms-disabled',
      channels: { [NOTIFICATION_CHANNELS.SMS]: false },
      emergencyOverride: false,
    });

    const allowed = await service.isChannelAllowed('user-sms-disabled', NOTIFICATION_CHANNELS.SMS, 'NORMAL');
    assert.equal(allowed.allowed, false);
    assert.ok(allowed.reason?.includes('disabled'));
  });

  it('should detect quiet hours accurately', () => {
    const activeQuiet = service.isInQuietHours({
      enabled: true,
      start: '00:00',
      end: '23:59',
    });

    assert.equal(activeQuiet, true);

    const inactiveQuiet = service.isInQuietHours({
      enabled: false,
      start: '00:00',
      end: '23:59',
    });

    assert.equal(inactiveQuiet, false);
  });
});
