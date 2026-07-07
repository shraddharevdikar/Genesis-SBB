export class OrganizationCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly organizationId: string,
    public readonly name: string
  ) {
    this.occurredAt = new Date();
  }
}
