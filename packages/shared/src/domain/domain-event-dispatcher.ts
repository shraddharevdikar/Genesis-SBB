import { DomainEvent } from './domain-event.js';

export interface DomainEventDispatcher {
  dispatch(event: DomainEvent): Promise<void>;
  dispatchAll(events: DomainEvent[] | readonly DomainEvent[]): Promise<void>;
}
