export class MembershipCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly membershipId: string,
    public readonly userId: string,
    public readonly organizationId: string,
    public readonly role: string
  ) {
    this.occurredAt = new Date();
  }
}
