import { DomainEvent, EventMetadata } from '@sbb/shared';

export class RoleCreatedEvent implements DomainEvent {
  public readonly eventId: string;
  public readonly eventType = 'RoleCreated';
  public readonly occurredAt: Date;
  public readonly aggregateId: string;
  public readonly aggregateType = 'Role';
  public readonly version = 1;

  constructor(
    public readonly roleId: string,
    public readonly roleName: string,
    public readonly metadata?: EventMetadata
  ) {
    this.eventId = 'evt_' + Math.random().toString(36).substring(2, 11);
    this.occurredAt = new Date();
    this.aggregateId = roleId;
  }
}
