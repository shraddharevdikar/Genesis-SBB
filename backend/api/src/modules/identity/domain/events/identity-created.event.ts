export class IdentityCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly identityId: string,
    public readonly email: string
  ) {
    this.occurredAt = new Date();
  }
}
