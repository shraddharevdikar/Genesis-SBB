import { DomainEvent, EventMetadata } from '@sbb/shared';

export class PolicyCreatedEvent implements DomainEvent {
  public readonly eventId: string;
  public readonly eventType = 'PolicyCreated';
  public readonly occurredAt: Date;
  public readonly aggregateId: string;
  public readonly aggregateType = 'Policy';
  public readonly version = 1;

  constructor(
    public readonly policyId: string,
    public readonly policyName: string,
    public readonly effect: string,
    public readonly metadata?: EventMetadata
  ) {
    this.eventId = 'evt_' + Math.random().toString(36).substring(2, 11);
    this.occurredAt = new Date();
    this.aggregateId = policyId;
  }
}
