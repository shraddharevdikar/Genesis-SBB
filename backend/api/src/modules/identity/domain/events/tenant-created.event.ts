export class TenantCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly tenantId: string,
    public readonly name: string
  ) {
    this.occurredAt = new Date();
  }
}
