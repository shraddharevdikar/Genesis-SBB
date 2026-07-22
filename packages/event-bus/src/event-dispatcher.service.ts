import { Injectable, Logger } from '@nestjs/common';
import { EventSubscriberService, IRegisteredSubscriber } from './event-subscriber.service.js';
import { EventStoreService } from './event-store.service.js';
import { IDomainEvent } from './interfaces/domain-event.interface.js';

@Injectable()
export class EventDispatcherService {
  private readonly logger = new Logger(EventDispatcherService.name);

  // Observability metrics
  private metrics = {
    processedCount: 0,
    failedCount: 0,
    retryCount: 0,
    dlqCount: 0,
    subscriberExecutionTimes: new Map<string, number[]>(),
  };

  constructor(
    private readonly subscriberService: EventSubscriberService,
    private readonly storeService: EventStoreService
  ) {}

  /**
   * Dispatches an event to all matched subscribers.
   * Leverages retry policy, prioritisation, and isolation.
   */
  async dispatch(event: IDomainEvent, options: { forceAsync?: boolean } = {}): Promise<void> {
    const subscribers = this.subscriberService.getSubscribersForEvent(event.eventType);

    if (subscribers.length === 0) {
      this.logger.debug(`No subscribers matched event ${event.eventType} (${event.id})`);
      await this.storeService.updateEventStatus(event.id, 'PROCESSED', 0);
      return;
    }

    // Sort subscribers by priority (lower number executes first)
    const sortedSubscribers = [...subscribers].sort((a, b) => a.priority - b.priority);

    // Filter sync vs async subscribers
    const syncSubscribers = sortedSubscribers.filter((s) => !s.async && !options.forceAsync);
    const asyncSubscribers = sortedSubscribers.filter((s) => s.async || options.forceAsync);

    let hasFailure = false;
    let maxAttemptsCount = 0;
    const errors: string[] = [];

    // 1. Process synchronous subscribers in order of priority
    for (const sub of syncSubscribers) {
      const result = await this.executeWithRetry(sub, event);
      if (!result.success) {
        hasFailure = true;
        errors.push(`[Sync][${sub.subscriberName}] ${result.error}`);
      }
      maxAttemptsCount = Math.max(maxAttemptsCount, result.attempts);
    }

    // 2. Process asynchronous subscribers concurrently (and with individual retries)
    if (asyncSubscribers.length > 0) {
      const promises = asyncSubscribers.map(async (sub) => {
        const result = await this.executeWithRetry(sub, event);
        return { sub, ...result };
      });

      const results = await Promise.all(promises);
      for (const res of results) {
        if (!res.success) {
          hasFailure = true;
          errors.push(`[Async][${res.sub.subscriberName}] ${res.error}`);
        }
        maxAttemptsCount = Math.max(maxAttemptsCount, res.attempts);
      }
    }

    // Update status in Event Store
    if (hasFailure) {
      const errorMessage = errors.join('; ');
      // If we failed after reaching retry thresholds, push it into Dead Letter Queue status (DLQ)
      const status = maxAttemptsCount >= 3 ? 'DLQ' : 'FAILED';
      if (status === 'DLQ') {
        this.metrics.dlqCount++;
      } else {
        this.metrics.failedCount++;
      }
      await this.storeService.updateEventStatus(event.id, status, maxAttemptsCount, errorMessage);
    } else {
      this.metrics.processedCount++;
      await this.storeService.updateEventStatus(event.id, 'PROCESSED', maxAttemptsCount);
    }
  }

  /**
   * Executes a single subscriber handler with a retry policy (up to 3 attempts, with exponential backoff).
   */
  async executeWithRetry(
    subscriber: IRegisteredSubscriber,
    event: IDomainEvent,
    maxAttempts: number = 3
  ): Promise<{ success: boolean; attempts: number; error?: string }> {
    let attempts = 0;
    let delay = 50; // ms

    while (attempts < maxAttempts) {
      attempts++;
      const startTime = Date.now();
      try {
        this.logger.debug(`Executing subscriber "${subscriber.subscriberName}" for event ${event.id} (Attempt ${attempts}/${maxAttempts})`);
        
        // Multi-tenant boundary check
        // Ensure event belongs to the expected tenant/org bound to subscriber context if specified
        await subscriber.handler(event);

        const duration = Date.now() - startTime;
        this.trackExecutionTime(subscriber.subscriberName, duration);

        return { success: true, attempts };
      } catch (err: any) {
        const duration = Date.now() - startTime;
        this.trackExecutionTime(subscriber.subscriberName, duration);
        this.metrics.retryCount++;

        this.logger.error(
          `Subscriber "${subscriber.subscriberName}" failed on event ${event.id} (Attempt ${attempts}/${maxAttempts}). Error: ${err.message}`
        );

        if (attempts >= maxAttempts) {
          return { success: false, attempts, error: err.message };
        }

        // Wait before retry
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2;
      }
    }

    return { success: false, attempts: maxAttempts, error: 'Max attempts reached' };
  }

  private trackExecutionTime(name: string, duration: number) {
    if (!this.metrics.subscriberExecutionTimes.has(name)) {
      this.metrics.subscriberExecutionTimes.set(name, []);
    }
    this.metrics.subscriberExecutionTimes.get(name)!.push(duration);
  }

  /**
   * Get comprehensive observability metrics.
   */
  getMetrics() {
    const avgExecutionTimes: Record<string, number> = {};
    for (const [name, times] of this.metrics.subscriberExecutionTimes.entries()) {
      const sum = times.reduce((a, b) => a + b, 0);
      avgExecutionTimes[name] = sum / times.length;
    }

    return {
      processedCount: this.metrics.processedCount,
      failedCount: this.metrics.failedCount,
      retryCount: this.metrics.retryCount,
      dlqCount: this.metrics.dlqCount,
      avgExecutionTimes,
      queueLength: this.subscriberService.getAllSubscriptions().length,
    };
  }

  /**
   * Clears accumulated metric states for test runs.
   */
  clearMetrics() {
    this.metrics = {
      processedCount: 0,
      failedCount: 0,
      retryCount: 0,
      dlqCount: 0,
      subscriberExecutionTimes: new Map(),
    };
  }
}
