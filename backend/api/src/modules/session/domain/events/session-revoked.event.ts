import { DomainEvent, EventMetadata } from '@sbb/shared';

export class SessionRevokedEvent implements DomainEvent {
  public readonly eventId: string;
  public readonly eventType = 'SessionRevoked';
  public readonly occurredAt: Date;
  public readonly aggregateId: string;
  public readonly aggregateType = 'Session';
  public readonly version = 1;

  constructor(
    public readonly sessionId: string,
    public readonly revokedAt: Date,
    public readonly metadata?: EventMetadata
  ) {
    this.eventId = 'evt_' + Math.random().toString(36).substring(2, 11);
    this.occurredAt = new Date();
    this.aggregateId = sessionId;
  }
}
