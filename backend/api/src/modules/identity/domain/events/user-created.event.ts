export class UserCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly displayName: string
  ) {
    this.occurredAt = new Date();
  }
}
