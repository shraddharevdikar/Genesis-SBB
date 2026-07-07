export class OrganizationDeactivatedEvent {
  public readonly occurredAt: Date;

  constructor(public readonly organizationId: string) {
    this.occurredAt = new Date();
  }
}
