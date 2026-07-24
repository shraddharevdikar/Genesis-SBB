import { Injectable, Logger, Optional, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { INotificationTemplate } from '../interfaces/notification.interface.js';
import { NotificationChannel } from '../constants/notification.constants.js';

@Injectable()
export class TemplateRepository {
  private readonly logger = new Logger(TemplateRepository.name);
  private memoryStore: Map<string, INotificationTemplate> = new Map();

  constructor(@Optional() private readonly db?: DatabaseService) {}

  async create(data: Partial<INotificationTemplate>): Promise<INotificationTemplate> {
    const id = data.id || `tmpl-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date();

    const tmpl: INotificationTemplate = {
      id,
      name: data.name!,
      code: data.code!,
      channel: (data.channel as NotificationChannel) || 'EMAIL',
      subject: data.subject || null,
      body: data.body!,
      variables: data.variables || [],
      tenantId: data.tenantId || null,
      organizationId: data.organizationId || null,
      isSystem: data.isSystem ?? false,
      createdAt: now,
      updatedAt: now,
    };

    if (this.db && (this.db as any).notificationTemplate) {
      try {
        await (this.db as any).notificationTemplate.create({
          data: {
            id: tmpl.id,
            name: tmpl.name,
            code: tmpl.code,
            channel: tmpl.channel,
            subject: tmpl.subject,
            body: tmpl.body,
            variables: tmpl.variables as any,
            tenantId: tmpl.tenantId,
            organizationId: tmpl.organizationId,
            isSystem: tmpl.isSystem,
          },
        });
      } catch (err: any) {
        this.logger.warn(`DB template create failed, using memory fallback: ${err.message}`);
      }
    }

    this.memoryStore.set(id, tmpl);
    return tmpl;
  }

  async findById(id: string, activeTenantId?: string): Promise<INotificationTemplate | null> {
    const item = Array.from(this.memoryStore.values()).find((t) => t.id === id);
    if (!item) return null;
    if (activeTenantId && item.tenantId && item.tenantId !== activeTenantId && !item.isSystem) {
      return null;
    }
    return item;
  }

  async findByCode(code: string, tenantId?: string | null): Promise<INotificationTemplate | null> {
    const items = Array.from(this.memoryStore.values()).filter((t) => t.code === code);
    if (items.length === 0) return null;

    // Prefer tenant-specific template first, fallback to system/global template
    if (tenantId) {
      const tenantTmpl = items.find((t) => t.tenantId === tenantId);
      if (tenantTmpl) return tenantTmpl;
    }
    return items.find((t) => t.isSystem || !t.tenantId) || items[0] || null;
  }

  async update(id: string, data: Partial<INotificationTemplate>): Promise<INotificationTemplate> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new NotFoundException(`Template ${id} not found`);
    }

    const updated: INotificationTemplate = {
      ...existing,
      ...data,
      updatedAt: new Date(),
    };

    if (this.db && (this.db as any).notificationTemplate) {
      try {
        await (this.db as any).notificationTemplate.update({
          where: { id },
          data: {
            name: updated.name,
            code: updated.code,
            channel: updated.channel,
            subject: updated.subject,
            body: updated.body,
            variables: updated.variables as any,
            isSystem: updated.isSystem,
          },
        });
      } catch (err: any) {
        this.logger.warn(`DB template update failed: ${err.message}`);
      }
    }

    this.memoryStore.set(id, updated);
    return updated;
  }

  async findAll(tenantId?: string): Promise<INotificationTemplate[]> {
    let list = Array.from(this.memoryStore.values());
    if (tenantId) {
      list = list.filter((t) => t.isSystem || !t.tenantId || t.tenantId === tenantId);
    }
    return list;
  }
}
