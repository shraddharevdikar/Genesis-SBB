import { DomainEvent } from './domain-event.js';

export abstract class AggregateRoot<TEvent extends any = any> {
  private _domainEvents: TEvent[] = [];

  /**
   * Returns a read-only list of domain events.
   */
  public getDomainEvents(): readonly TEvent[] {
    return Object.freeze([...this._domainEvents]);
  }

  /**
   * For backwards compatibility with older implementations in this codebase.
   */
  public getEvents(): TEvent[] {
    return this._domainEvents;
  }

  /**
   * Stores a new domain event.
   */
  protected addDomainEvent(event: TEvent): void {
    this._domainEvents.push(event);
  }

  /**
   * Removes a domain event from the stored list.
   */
  protected removeDomainEvent(event: TEvent): void {
    const index = this._domainEvents.indexOf(event);
    if (index > -1) {
      this._domainEvents.splice(index, 1);
    }
  }

  /**
   * Clears all stored domain events.
   */
  public clearDomainEvents(): void {
    this._domainEvents = [];
  }

  /**
   * Clears events (backwards compatible alias).
   */
  public clearEvents(): void {
    this.clearDomainEvents();
  }
}
