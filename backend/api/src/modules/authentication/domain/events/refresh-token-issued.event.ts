import { DomainEvent, EventMetadata } from '@sbb/shared';

export class RefreshTokenIssuedEvent implements DomainEvent {
  public readonly eventId: string;
  public readonly eventType = 'RefreshTokenIssued';
  public readonly occurredAt: Date;
  public readonly aggregateId: string;
  public readonly aggregateType = 'Authentication';
  public readonly version = 1;

  constructor(
    public readonly userId: string,
    public readonly tokenId: string,
    public readonly metadata?: EventMetadata
  ) {
    this.eventId = 'evt_' + Math.random().toString(36).substring(2, 11);
    this.occurredAt = new Date();
    this.aggregateId = userId;
  }
}
