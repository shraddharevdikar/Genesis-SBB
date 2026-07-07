export class MembershipDeactivatedEvent {
  public readonly occurredAt: Date;

  constructor(public readonly membershipId: string) {
    this.occurredAt = new Date();
  }
}
