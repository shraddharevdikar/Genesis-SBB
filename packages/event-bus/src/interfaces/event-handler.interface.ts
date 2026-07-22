import { IDomainEvent } from './domain-event.interface.js';

export interface IEventHandler<T extends IDomainEvent = IDomainEvent> {
  handle(event: T): Promise<void> | void;
}

export interface IEventHandlerOptions {
  eventType: string | string[]; // Support specific or wildcard / array of event types
  priority?: number;            // Lower number = higher priority
  async?: boolean;              // Run asynchronously
}
