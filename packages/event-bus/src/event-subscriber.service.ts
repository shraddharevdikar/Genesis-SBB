import { Injectable, Logger } from '@nestjs/common';

export interface IRegisteredSubscriber {
  handler: (event: any) => Promise<void> | void;
  eventType: string; // Pattern (e.g. 'UserRegistered', 'User*', '*')
  priority: number;
  async: boolean;
  subscriberName: string;
}

@Injectable()
export class EventSubscriberService {
  private readonly logger = new Logger(EventSubscriberService.name);
  private subscribers: IRegisteredSubscriber[] = [];

  /**
   * Subscribe to a specific event or pattern with priority support.
   */
  subscribe(
    eventType: string,
    handler: (event: any) => Promise<void> | void,
    options: { priority?: number; async?: boolean; subscriberName?: string } = {}
  ): () => void {
    const subscriber: IRegisteredSubscriber = {
      handler,
      eventType,
      priority: options.priority ?? 100,
      async: options.async ?? false,
      subscriberName: options.subscriberName || handler.name || 'AnonymousSubscriber',
    };
    this.subscribers.push(subscriber);
    this.logger.debug(`Subscribed "${subscriber.subscriberName}" to pattern "${eventType}" (Priority: ${subscriber.priority}, Async: ${subscriber.async})`);
    return () => this.unsubscribe(subscriber);
  }

  /**
   * Unsubscribe a subscriber.
   */
  unsubscribe(subscriber: IRegisteredSubscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
    this.logger.debug(`Unsubscribed "${subscriber.subscriberName}" from pattern "${subscriber.eventType}"`);
  }

  /**
   * Unsubscribes by pattern and handler.
   */
  unsubscribeHandler(eventType: string, handler: (event: any) => Promise<void> | void) {
    const lengthBefore = this.subscribers.length;
    this.subscribers = this.subscribers.filter((s) => !(s.eventType === eventType && s.handler === handler));
    this.logger.debug(`Unsubscribed handlers for pattern "${eventType}". Removed ${lengthBefore - this.subscribers.length} subscriptions.`);
  }

  /**
   * Subscribes a handler to execute exactly once.
   */
  once(
    eventType: string,
    handler: (event: any) => Promise<void> | void,
    options: { priority?: number; async?: boolean; subscriberName?: string } = {}
  ) {
    const unsubscribeFn = this.subscribe(
      eventType,
      async (event) => {
        unsubscribeFn();
        await handler(event);
      },
      { ...options, subscriberName: `${options.subscriberName || 'OnceHandler'}_once` }
    );
  }

  /**
   * Finds all subscribers matching a given event type.
   * Supports wildcard matching.
   */
  getSubscribersForEvent(eventType: string): IRegisteredSubscriber[] {
    return this.subscribers.filter((sub) => {
      if (sub.eventType === '*') return true;
      if (sub.eventType === eventType) return true;
      
      try {
        // Convert wildcard pattern (e.g. 'User.*' or 'User*') to regex
        const pattern = sub.eventType
          .replace(/\./g, '\\.')
          .replace(/\*/g, '.*');
        const regex = new RegExp(`^${pattern}$`);
        return regex.test(eventType);
      } catch (err) {
        return false;
      }
    });
  }

  /**
   * Gets all active subscriptions.
   */
  getAllSubscriptions(): IRegisteredSubscriber[] {
    return this.subscribers;
  }

  /**
   * Clear all subscriptions.
   */
  clear() {
    this.subscribers = [];
  }
}
