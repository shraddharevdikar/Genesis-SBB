import { Injectable, Logger, Optional } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { INotificationPreference, ITenantNotificationSettings } from '../interfaces/notification.interface.js';
import { DIGEST_MODE, NOTIFICATION_CHANNELS } from '../constants/notification.constants.js';

@Injectable()
export class PreferenceRepository {
  private readonly logger = new Logger(PreferenceRepository.name);
  private prefStore: Map<string, INotificationPreference> = new Map(); // key: userId
  private tenantStore: Map<string, ITenantNotificationSettings> = new Map(); // key: tenantId

  constructor(@Optional() private readonly db?: DatabaseService) {}

  async findPreferenceByUserId(userId: string): Promise<INotificationPreference | null> {
    return this.prefStore.get(userId) || null;
  }

  async upsertPreference(data: Partial<INotificationPreference> & { userId: string }): Promise<INotificationPreference> {
    const existing = await this.findPreferenceByUserId(data.userId);
    const now = new Date();

    const updated: INotificationPreference = {
      id: existing?.id || `pref-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      userId: data.userId,
      tenantId: data.tenantId ?? existing?.tenantId ?? null,
      organizationId: data.organizationId ?? existing?.organizationId ?? null,
      channels: {
        [NOTIFICATION_CHANNELS.EMAIL]: true,
        [NOTIFICATION_CHANNELS.SMS]: true,
        [NOTIFICATION_CHANNELS.WHATSAPP]: true,
        [NOTIFICATION_CHANNELS.PUSH]: true,
        [NOTIFICATION_CHANNELS.IN_APP]: true,
        ...(existing?.channels || {}),
        ...(data.channels || {}),
      },
      quietHours: data.quietHours !== undefined ? data.quietHours : existing?.quietHours || null,
      language: data.language || existing?.language || 'en',
      timezone: data.timezone || existing?.timezone || 'UTC',
      digestMode: data.digestMode || existing?.digestMode || DIGEST_MODE.IMMEDIATE,
      emergencyOverride: data.emergencyOverride ?? existing?.emergencyOverride ?? true,
      createdAt: existing?.createdAt || now,
      updatedAt: now,
    };

    if (this.db && (this.db as any).notificationPreference) {
      try {
        await (this.db as any).notificationPreference.upsert({
          where: { userId: data.userId },
          create: {
            id: updated.id,
            userId: updated.userId,
            tenantId: updated.tenantId,
            organizationId: updated.organizationId,
            channels: updated.channels as any,
            quietHours: updated.quietHours as any,
            language: updated.language,
            timezone: updated.timezone,
            digestMode: updated.digestMode,
            emergencyOverride: updated.emergencyOverride,
          },
          update: {
            channels: updated.channels as any,
            quietHours: updated.quietHours as any,
            language: updated.language,
            timezone: updated.timezone,
            digestMode: updated.digestMode,
            emergencyOverride: updated.emergencyOverride,
          },
        });
      } catch (err: any) {
        this.logger.warn(`DB preference upsert failed, using memory fallback: ${err.message}`);
      }
    }

    this.prefStore.set(data.userId, updated);
    return updated;
  }

  async findTenantSettings(tenantId: string): Promise<ITenantNotificationSettings | null> {
    return this.tenantStore.get(tenantId) || null;
  }

  async upsertTenantSettings(data: Partial<ITenantNotificationSettings> & { tenantId: string }): Promise<ITenantNotificationSettings> {
    const existing = await this.findTenantSettings(data.tenantId);
    const now = new Date();

    const updated: ITenantNotificationSettings = {
      id: existing?.id || `tsett-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      tenantId: data.tenantId,
      defaultSender: data.defaultSender !== undefined ? data.defaultSender : existing?.defaultSender || null,
      branding: data.branding !== undefined ? data.branding : existing?.branding || null,
      policies: data.policies !== undefined ? data.policies : existing?.policies || null,
      createdAt: existing?.createdAt || now,
      updatedAt: now,
    };

    this.tenantStore.set(data.tenantId, updated);
    return updated;
  }
}
