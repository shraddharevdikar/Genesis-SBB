import { Injectable, Logger, Optional } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { INotification } from '../interfaces/notification.interface.js';
import { NOTIFICATION_STATUS, NotificationStatus, NotificationChannel, NotificationPriority } from '../constants/notification.constants.js';

@Injectable()
export class NotificationRepository {
  private readonly logger = new Logger(NotificationRepository.name);
  private memoryStore: Map<string, INotification> = new Map();

  constructor(@Optional() private readonly db?: DatabaseService) {}

  async create(data: Partial<INotification>): Promise<INotification> {
    const id = data.id || `notif-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date();

    const notif: INotification = {
      id,
      tenantId: data.tenantId || null,
      organizationId: data.organizationId || null,
      userId: data.userId || null,
      recipient: data.recipient!,
      channel: data.channel || 'EMAIL',
      templateId: data.templateId || null,
      title: data.title || null,
      content: data.content || '',
      metadata: data.metadata || null,
      status: (data.status as NotificationStatus) || NOTIFICATION_STATUS.QUEUED,
      priority: (data.priority as NotificationPriority) || 'NORMAL',
      retryCount: data.retryCount || 0,
      maxRetries: data.maxRetries ?? 3,
      lastError: data.lastError || null,
      scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : null,
      sentAt: data.sentAt ? new Date(data.sentAt) : null,
      deliveredAt: data.deliveredAt ? new Date(data.deliveredAt) : null,
      failedAt: data.failedAt ? new Date(data.failedAt) : null,
      providerLatency: data.providerLatency || null,
      createdAt: now,
      updatedAt: now,
    };

    if (this.db && (this.db as any).notification) {
      try {
        const created = await (this.db as any).notification.create({
          data: {
            id: notif.id,
            tenantId: notif.tenantId,
            organizationId: notif.organizationId,
            userId: notif.userId,
            recipient: notif.recipient,
            channel: notif.channel,
            templateId: notif.templateId,
            title: notif.title,
            content: notif.content,
            metadata: notif.metadata as any,
            status: notif.status,
            priority: notif.priority,
            retryCount: notif.retryCount,
            maxRetries: notif.maxRetries,
            lastError: notif.lastError,
            scheduledAt: notif.scheduledAt,
            sentAt: notif.sentAt,
            deliveredAt: notif.deliveredAt,
            failedAt: notif.failedAt,
            providerLatency: notif.providerLatency,
          },
        });
        this.memoryStore.set(created.id, notif);
        return notif;
      } catch (err: any) {
        this.logger.warn(`DB insert failed, using in-memory store fallback: ${err.message}`);
      }
    }

    this.memoryStore.set(id, notif);
    return notif;
  }

  async findById(id: string, activeTenantId?: string): Promise<INotification | null> {
    if (this.db && (this.db as any).notification) {
      try {
        const where: any = { id };
        if (activeTenantId) where.tenantId = activeTenantId;
        const res = await (this.db as any).notification.findFirst({ where });
        if (res) return res as INotification;
      } catch (err: any) {
        this.logger.warn(`DB findById failed, falling back to memory: ${err.message}`);
      }
    }

    const item = this.memoryStore.get(id);
    if (!item) return null;
    if (activeTenantId && item.tenantId && item.tenantId !== activeTenantId) {
      return null;
    }
    return item;
  }

  async update(id: string, data: Partial<INotification>): Promise<INotification> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new Error(`Notification ${id} not found`);
    }

    const updated: INotification = {
      ...existing,
      ...data,
      updatedAt: new Date(),
    };

    if (this.db && (this.db as any).notification) {
      try {
        await (this.db as any).notification.update({
          where: { id },
          data: {
            status: updated.status,
            retryCount: updated.retryCount,
            lastError: updated.lastError,
            sentAt: updated.sentAt,
            deliveredAt: updated.deliveredAt,
            failedAt: updated.failedAt,
            providerLatency: updated.providerLatency,
            metadata: updated.metadata as any,
          },
        });
      } catch (err: any) {
        this.logger.warn(`DB update failed, using memory store: ${err.message}`);
      }
    }

    this.memoryStore.set(id, updated);
    return updated;
  }

  async findMany(filters: {
    tenantId?: string;
    organizationId?: string;
    userId?: string;
    status?: NotificationStatus;
    channel?: NotificationChannel;
    recipient?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ items: INotification[]; total: number }> {
    let list = Array.from(this.memoryStore.values());

    if (filters.tenantId) list = list.filter((n) => n.tenantId === filters.tenantId);
    if (filters.organizationId) list = list.filter((n) => n.organizationId === filters.organizationId);
    if (filters.userId) list = list.filter((n) => n.userId === filters.userId);
    if (filters.status) list = list.filter((n) => n.status === filters.status);
    if (filters.channel) list = list.filter((n) => n.channel === filters.channel);
    if (filters.recipient) list = list.filter((n) => n.recipient === filters.recipient);

    list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    const total = list.length;
    const offset = filters.offset || 0;
    const limit = filters.limit || 50;
    const items = list.slice(offset, offset + limit);

    return { items, total };
  }

  async findPendingScheduled(now: Date = new Date()): Promise<INotification[]> {
    return Array.from(this.memoryStore.values()).filter(
      (n) => n.status === NOTIFICATION_STATUS.QUEUED && n.scheduledAt && n.scheduledAt <= now
    );
  }
}
