export class TenantSuspendedEvent {
  public readonly occurredAt: Date;

  constructor(public readonly tenantId: string) {
    this.occurredAt = new Date();
  }
}
