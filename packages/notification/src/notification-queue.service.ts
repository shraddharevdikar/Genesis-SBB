import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { NotificationRepository } from './repositories/notification.repository.js';
import { INotification } from './interfaces/notification.interface.js';
import { NOTIFICATION_STATUS, DEFAULT_RETRY_POLICY, NotificationStatus } from './constants/notification.constants.js';

export interface IQueueJob {
  notification: INotification;
  processAfter?: Date;
}

@Injectable()
export class NotificationQueueService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(NotificationQueueService.name);
  private internalQueue: INotification[] = [];
  private deadLetterQueue: INotification[] = [];
  private pollInterval?: NodeJS.Timeout;

  constructor(private readonly notificationRepo: NotificationRepository) {}

  onModuleInit(): void {
    // Start background processing loop every 1 second
    this.pollInterval = setInterval(() => {
      this.processScheduledJobs().catch((err) => {
        this.logger.error(`Error processing scheduled jobs: ${err.message}`);
      });
    }, 1000);
  }

  onModuleDestroy(): void {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }

  enqueue(notification: INotification): void {
    this.internalQueue.push(notification);
    this.logger.debug(`Enqueued notification ${notification.id} for recipient ${notification.recipient}`);
  }

  enqueueBatch(notifications: INotification[]): void {
    for (const notif of notifications) {
      this.enqueue(notif);
    }
  }

  dequeue(): INotification | undefined {
    const now = new Date();
    const index = this.internalQueue.findIndex((item) => {
      if (item.status !== NOTIFICATION_STATUS.QUEUED && item.status !== NOTIFICATION_STATUS.RETRYING) {
        return false;
      }
      if (item.scheduledAt && item.scheduledAt > now) {
        return false;
      }
      return true;
    });

    if (index !== -1) {
      const [item] = this.internalQueue.splice(index, 1);
      return item;
    }
    return undefined;
  }

  getQueueSize(): number {
    return this.internalQueue.length;
  }

  getDlqSize(): number {
    return this.deadLetterQueue.length;
  }

  getDlqItems(): INotification[] {
    return [...this.deadLetterQueue];
  }

  moveToDlq(notification: INotification, error: string): void {
    notification.status = NOTIFICATION_STATUS.FAILED;
    notification.lastError = error;
    notification.failedAt = new Date();
    this.deadLetterQueue.push(notification);
    this.logger.warn(`Moved notification ${notification.id} to Dead Letter Queue. Error: ${error}`);
  }

  calculateRetryDelay(attempt: number, config = DEFAULT_RETRY_POLICY): number {
    const delay = config.initialDelayMs * Math.pow(config.backoffFactor, attempt - 1);
    return Math.min(delay, config.maxDelayMs);
  }

  async processScheduledJobs(): Promise<number> {
    const pendingScheduled = await this.notificationRepo.findPendingScheduled(new Date());
    let added = 0;
    for (const notif of pendingScheduled) {
      if (!this.internalQueue.some((q) => q.id === notif.id)) {
        this.enqueue(notif);
        added++;
      }
    }
    return added;
  }

  cancelNotification(id: string): boolean {
    const index = this.internalQueue.findIndex((n) => n.id === id);
    if (index !== -1) {
      const [item] = this.internalQueue.splice(index, 1);
      item.status = NOTIFICATION_STATUS.CANCELLED;
      return true;
    }
    return false;
  }
}
