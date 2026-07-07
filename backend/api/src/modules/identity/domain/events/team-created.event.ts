export class TeamCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly teamId: string,
    public readonly organizationId: string,
    public readonly name: string
  ) {
    this.occurredAt = new Date();
  }
}
