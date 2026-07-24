import { Injectable, Logger, Optional } from '@nestjs/common';
import { AuditService } from '@sbb/audit';
import { PreferenceRepository } from './repositories/preference.repository.js';
import { UpdatePreferenceDto, TenantSettingsDto } from './dto/notification-preference.dto.js';
import { INotificationPreference, ITenantNotificationSettings, IQuietHours } from './interfaces/notification.interface.js';
import { NotificationChannel, NotificationPriority, NOTIFICATION_PRIORITY } from './constants/notification.constants.js';

@Injectable()
export class NotificationPreferenceService {
  private readonly logger = new Logger(NotificationPreferenceService.name);

  constructor(
    private readonly prefRepo: PreferenceRepository,
    @Optional() private readonly auditService?: AuditService
  ) {}

  async getUserPreference(userId: string): Promise<INotificationPreference> {
    const existing = await this.prefRepo.findPreferenceByUserId(userId);
    if (existing) return existing;
    return this.prefRepo.upsertPreference({ userId });
  }

  async updatePreference(dto: UpdatePreferenceDto): Promise<INotificationPreference> {
    const userId = dto.userId || 'default-user';
    const updated = await this.prefRepo.upsertPreference({ ...dto, userId });

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        entity: 'NOTIFICATION_PREFERENCE',
        entityId: updated.id,
        action: 'PREFERENCE_CHANGED',
        tenantId: updated.tenantId || undefined,
        organizationId: updated.organizationId || undefined,
        userId,
        payload: { channels: updated.channels, quietHours: updated.quietHours, digestMode: updated.digestMode },
      });
    }

    return updated;
  }

  async getTenantSettings(tenantId: string): Promise<ITenantNotificationSettings | null> {
    return this.prefRepo.findTenantSettings(tenantId);
  }

  async updateTenantSettings(dto: TenantSettingsDto): Promise<ITenantNotificationSettings> {
    const updated = await this.prefRepo.upsertTenantSettings(dto);

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: 'system',
        entity: 'TENANT_NOTIFICATION_SETTINGS',
        entityId: updated.id,
        action: 'TENANT_SETTINGS_CHANGED',
        tenantId: updated.tenantId,
        payload: { defaultSender: updated.defaultSender, branding: updated.branding, policies: updated.policies },
      });
    }

    return updated;
  }

  /**
   * Evaluates if a notification channel is allowed for a user, respecting channel toggles,
   * quiet hours, and emergency overrides.
   */
  async isChannelAllowed(
    userId: string | null | undefined,
    channel: NotificationChannel,
    priority: NotificationPriority = 'NORMAL'
  ): Promise<{ allowed: boolean; reason?: string }> {
    if (!userId) return { allowed: true };

    const pref = await this.getUserPreference(userId);

    // 1. Channel explicit toggle
    if (pref.channels && pref.channels[channel] === false) {
      if ((priority === NOTIFICATION_PRIORITY.EMERGENCY || priority === NOTIFICATION_PRIORITY.HIGH) && pref.emergencyOverride) {
        return { allowed: true, reason: 'Emergency override bypassed disabled channel' };
      }
      return { allowed: false, reason: `Channel ${channel} is disabled by user preference` };
    }

    // 2. Quiet Hours
    if (pref.quietHours && pref.quietHours.enabled) {
      const inQuiet = this.isInQuietHours(pref.quietHours);
      if (inQuiet) {
        if ((priority === NOTIFICATION_PRIORITY.EMERGENCY || priority === NOTIFICATION_PRIORITY.HIGH) && pref.emergencyOverride) {
          return { allowed: true, reason: 'Emergency override bypassed quiet hours' };
        }
        return { allowed: false, reason: 'User is currently in quiet hours' };
      }
    }

    return { allowed: true };
  }

  public isInQuietHours(quietHours: IQuietHours): boolean {
    if (!quietHours || !quietHours.enabled || !quietHours.start || !quietHours.end) {
      return false;
    }

    try {
      const now = new Date();
      // Format as "HH:MM"
      const currentHH = String(now.getHours()).padStart(2, '0');
      const currentMM = String(now.getMinutes()).padStart(2, '0');
      const currentTime = `${currentHH}:${currentMM}`;

      const { start, end } = quietHours;

      if (start <= end) {
        // Daytime quiet hours e.g. 13:00 to 14:00
        return currentTime >= start && currentTime < end;
      } else {
        // Overnight quiet hours e.g. 22:00 to 07:00
        return currentTime >= start || currentTime < end;
      }
    } catch {
      return false;
    }
  }
}
