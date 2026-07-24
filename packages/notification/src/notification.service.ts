import { Injectable, Logger, Optional, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { EventPublisherService } from '@sbb/event-bus';
import { AuditService } from '@sbb/audit';
import { NotificationRepository } from './repositories/notification.repository.js';
import { NotificationDispatcherService } from './notification-dispatcher.service.js';
import { NotificationQueueService } from './notification-queue.service.js';
import { NotificationTemplateService } from './notification-template.service.js';
import { NotificationPreferenceService } from './notification-preference.service.js';
import { DeliveryTrackerService } from './delivery-tracker.service.js';

import { SendNotificationDto, ScheduleNotificationDto, BatchSendNotificationDto } from './dto/index.js';
import { INotification, IDeliveryMetrics } from './interfaces/notification.interface.js';
import { NOTIFICATION_CHANNELS, NOTIFICATION_STATUS, NOTIFICATION_PRIORITY, NotificationChannel, NotificationPriority, DEFAULT_RETRY_POLICY } from './constants/notification.constants.js';
import {
  NotificationQueuedEvent,
  NotificationSentEvent,
  NotificationDeliveredEvent,
  NotificationFailedEvent,
  NotificationRetriedEvent,
  NotificationCancelledEvent,
} from './events/notification.events.js';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly notificationRepo: NotificationRepository,
    private readonly dispatcherService: NotificationDispatcherService,
    private readonly queueService: NotificationQueueService,
    private readonly templateService: NotificationTemplateService,
    private readonly preferenceService: NotificationPreferenceService,
    private readonly deliveryTracker: DeliveryTrackerService,
    @Optional() private readonly eventPublisher?: EventPublisherService,
    @Optional() private readonly auditService?: AuditService
  ) {}

  /**
   * Primary entry point to send a single notification.
   */
  async send(dto: SendNotificationDto, activeTenantId?: string): Promise<INotification> {
    const tenantId = activeTenantId || dto.tenantId || null;
    const channel = await this.resolveChannel(dto);

    // 1. Check user preference and quiet hours
    if (dto.userId) {
      const check = await this.preferenceService.isChannelAllowed(dto.userId, channel, dto.priority || 'NORMAL');
      if (!check.allowed) {
        this.logger.warn(`Notification blocked for user ${dto.userId}: ${check.reason}`);
      }
    }

    // 2. Fetch & render template if templateCode provided
    let title = dto.title;
    let content = dto.content || '';

    if (dto.templateCode) {
      const template = await this.templateService.getTemplateByCode(dto.templateCode, tenantId);
      if (!template) {
        throw new NotFoundException(`Template with code '${dto.templateCode}' not found`);
      }
      const tenantSettings = tenantId ? await this.preferenceService.getTenantSettings(tenantId) : null;
      const rendered = this.templateService.renderTemplate(template, dto.variables || {}, tenantSettings);
      title = title || rendered.subject;
      content = rendered.body;
    }

    if (!content && !title) {
      throw new BadRequestException('Notification content or title is required');
    }

    // 3. Create notification record
    const scheduledAt = dto.scheduledAt ? new Date(dto.scheduledAt) : null;
    const status = scheduledAt && scheduledAt > new Date() ? NOTIFICATION_STATUS.QUEUED : NOTIFICATION_STATUS.QUEUED;

    const notification = await this.notificationRepo.create({
      tenantId,
      organizationId: dto.organizationId || null,
      userId: dto.userId || null,
      recipient: dto.recipient,
      channel,
      title: title || null,
      content,
      metadata: dto.metadata || null,
      status,
      priority: dto.priority || NOTIFICATION_PRIORITY.NORMAL,
      scheduledAt,
      maxRetries: DEFAULT_RETRY_POLICY.maxRetries,
    });

    this.deliveryTracker.recordSent();

    // 4. Publish NotificationQueuedEvent
    if (this.eventPublisher) {
      await this.eventPublisher.publish(
        new NotificationQueuedEvent({
          tenantId: notification.tenantId,
          organizationId: notification.organizationId,
          userId: notification.userId,
          payload: {
            notificationId: notification.id,
            recipient: notification.recipient,
            channel: notification.channel,
            title: notification.title,
            content: notification.content,
            scheduledAt: notification.scheduledAt,
          },
        })
      );
    }

    // 5. Dispatch immediately or queue
    if (!scheduledAt || scheduledAt <= new Date()) {
      return this.dispatchAndTrack(notification);
    } else {
      this.queueService.enqueue(notification);
      return notification;
    }
  }

  /**
   * Schedules a notification for future delivery.
   */
  async schedule(dto: ScheduleNotificationDto, activeTenantId?: string): Promise<INotification> {
    return this.send(dto, activeTenantId);
  }

  /**
   * Sends a batch of notifications.
   */
  async sendBatch(dto: BatchSendNotificationDto, activeTenantId?: string): Promise<INotification[]> {
    const tenantSettings = activeTenantId ? await this.preferenceService.getTenantSettings(activeTenantId) : null;
    const maxBatchSize = tenantSettings?.policies?.maxBatchSize || 500;

    if (dto.notifications.length > maxBatchSize) {
      throw new BadRequestException(`Batch size (${dto.notifications.length}) exceeds maximum limit of ${maxBatchSize}`);
    }

    const results: INotification[] = [];
    for (const item of dto.notifications) {
      const res = await this.send(item, activeTenantId);
      results.push(res);
    }
    return results;
  }

  /**
   * Workflow Integration Helper: Sends a notification from a workflow context without forcing caller to specify a channel.
   */
  async sendWorkflowNotification(params: {
    recipient: string;
    templateCode?: string;
    title?: string;
    content?: string;
    variables?: Record<string, any>;
    tenantId?: string;
    organizationId?: string;
    userId?: string;
    priority?: NotificationPriority;
  }): Promise<INotification> {
    return this.send({
      ...params,
      channel: undefined, // Auto-detect channel
    });
  }

  /**
   * Helper method to perform actual provider dispatch, handle retries, events, and audit logs.
   */
  public async dispatchAndTrack(notification: INotification): Promise<INotification> {
    try {
      await this.notificationRepo.update(notification.id, { status: NOTIFICATION_STATUS.PROCESSING });

      const tenantSettings = notification.tenantId
        ? await this.preferenceService.getTenantSettings(notification.tenantId)
        : null;

      const result = await this.dispatcherService.dispatch({
        id: notification.id,
        recipient: notification.recipient,
        channel: notification.channel,
        title: notification.title || undefined,
        content: notification.content,
        metadata: notification.metadata || undefined,
        tenantId: notification.tenantId,
        organizationId: notification.organizationId,
        userId: notification.userId,
        priority: notification.priority,
        sender: tenantSettings?.defaultSender || undefined,
      });

      if (result.success) {
        const deliveredAt = new Date();
        const updated = await this.notificationRepo.update(notification.id, {
          status: NOTIFICATION_STATUS.DELIVERED,
          sentAt: deliveredAt,
          deliveredAt,
          providerLatency: result.latencyMs || 0,
        });

        this.deliveryTracker.recordDelivered(result.latencyMs);

        // Audit log
        if (this.auditService) {
          await this.auditService.createAuditLog({
            actorId: notification.userId || 'system',
            entity: 'NOTIFICATION',
            entityId: notification.id,
            action: 'NOTIFICATION_SENT',
            tenantId: notification.tenantId || undefined,
            organizationId: notification.organizationId || undefined,
            userId: notification.userId || undefined,
            payload: { recipient: notification.recipient, channel: notification.channel, provider: result.provider },
          });
        }

        // Publish event
        if (this.eventPublisher) {
          await this.eventPublisher.publish(
            new NotificationDeliveredEvent({
              tenantId: notification.tenantId,
              organizationId: notification.organizationId,
              userId: notification.userId,
              payload: {
                notificationId: notification.id,
                recipient: notification.recipient,
                channel: notification.channel,
                deliveredAt,
                providerLatency: result.latencyMs,
              },
            })
          );
        }

        return updated;
      } else {
        return this.handleFailure(notification, result.error || 'Provider returned failure status');
      }
    } catch (err: any) {
      return this.handleFailure(notification, err.message);
    }
  }

  private async handleFailure(notification: INotification, errorReason: string): Promise<INotification> {
    this.deliveryTracker.recordFailed();
    const newRetryCount = notification.retryCount + 1;

    if (newRetryCount <= notification.maxRetries) {
      this.deliveryTracker.recordRetry();
      const updated = await this.notificationRepo.update(notification.id, {
        status: NOTIFICATION_STATUS.RETRYING,
        retryCount: newRetryCount,
        lastError: errorReason,
      });

      if (this.eventPublisher) {
        await this.eventPublisher.publish(
          new NotificationRetriedEvent({
            tenantId: notification.tenantId,
            organizationId: notification.organizationId,
            userId: notification.userId,
            payload: {
              notificationId: notification.id,
              recipient: notification.recipient,
              channel: notification.channel,
              retryCount: newRetryCount,
              error: errorReason,
            },
          })
        );
      }

      // Schedule retry via queue
      const delayMs = this.queueService.calculateRetryDelay(newRetryCount);
      setTimeout(() => {
        this.dispatchAndTrack(updated).catch((err) => {
          this.logger.error(`Retry dispatch failed for ${notification.id}: ${err.message}`);
        });
      }, delayMs);

      return updated;
    } else {
      // Max retries exceeded -> DLQ & FAILED
      const updated = await this.notificationRepo.update(notification.id, {
        status: NOTIFICATION_STATUS.FAILED,
        retryCount: newRetryCount,
        lastError: errorReason,
        failedAt: new Date(),
      });

      this.queueService.moveToDlq(updated, errorReason);

      if (this.auditService) {
        await this.auditService.createAuditLog({
          actorId: notification.userId || 'system',
          entity: 'NOTIFICATION',
          entityId: notification.id,
          action: 'NOTIFICATION_FAILED',
          status: 'FAILURE',
          tenantId: notification.tenantId || undefined,
          organizationId: notification.organizationId || undefined,
          userId: notification.userId || undefined,
          payload: { recipient: notification.recipient, channel: notification.channel, error: errorReason },
        });
      }

      if (this.eventPublisher) {
        await this.eventPublisher.publish(
          new NotificationFailedEvent({
            tenantId: notification.tenantId,
            organizationId: notification.organizationId,
            userId: notification.userId,
            payload: {
              notificationId: notification.id,
              recipient: notification.recipient,
              channel: notification.channel,
              error: errorReason,
              failedAt: new Date(),
            },
          })
        );
      }

      return updated;
    }
  }

  /**
   * Retrieves notification details by ID with tenant guard.
   */
  async getById(id: string, activeTenantId?: string): Promise<INotification> {
    const notif = await this.notificationRepo.findById(id, activeTenantId);
    if (!notif) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }
    return notif;
  }

  /**
   * Retrieves history with search criteria and tenant isolation.
   */
  async getHistory(
    filters: {
      status?: any;
      channel?: any;
      recipient?: string;
      userId?: string;
      tenantId?: string;
      organizationId?: string;
      limit?: number;
      offset?: number;
    },
    activeTenantId?: string
  ): Promise<{ items: INotification[]; total: number }> {
    const tenantId = activeTenantId || filters.tenantId;

    return this.notificationRepo.findMany({
      ...filters,
      tenantId,
    });
  }

  /**
   * Cancels a queued or scheduled notification.
   */
  async cancel(id: string, activeTenantId?: string): Promise<INotification> {
    const notif = await this.getById(id, activeTenantId);

    if (notif.status === NOTIFICATION_STATUS.DELIVERED || notif.status === NOTIFICATION_STATUS.FAILED) {
      throw new BadRequestException(`Cannot cancel notification ${id} with status ${notif.status}`);
    }

    this.queueService.cancelNotification(id);
    const updated = await this.notificationRepo.update(id, {
      status: NOTIFICATION_STATUS.CANCELLED,
    });

    if (this.eventPublisher) {
      await this.eventPublisher.publish(
        new NotificationCancelledEvent({
          tenantId: updated.tenantId,
          organizationId: updated.organizationId,
          userId: updated.userId,
          payload: {
            notificationId: updated.id,
            recipient: updated.recipient,
            channel: updated.channel,
            status: NOTIFICATION_STATUS.CANCELLED,
          },
        })
      );
    }

    return updated;
  }

  /**
   * Obtains live observability metrics.
   */
  getMetrics(): IDeliveryMetrics {
    return this.deliveryTracker.getMetrics(this.queueService.getQueueSize());
  }

  private async resolveChannel(dto: SendNotificationDto): Promise<NotificationChannel> {
    if (dto.channel) return dto.channel;

    // Auto-select channel based on recipient format
    if (dto.recipient.includes('@')) {
      return NOTIFICATION_CHANNELS.EMAIL;
    }
    if (dto.recipient.startsWith('whatsapp:')) {
      return NOTIFICATION_CHANNELS.WHATSAPP;
    }
    if (/^\+?[1-9]\d{1,14}$/.test(dto.recipient.replace(/[\s\-\(\)]/g, ''))) {
      return NOTIFICATION_CHANNELS.SMS;
    }
    return NOTIFICATION_CHANNELS.IN_APP;
  }
}
