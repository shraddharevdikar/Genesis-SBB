export class OrganizationUpdatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly organizationId: string,
    public readonly newName: string
  ) {
    this.occurredAt = new Date();
  }
}
