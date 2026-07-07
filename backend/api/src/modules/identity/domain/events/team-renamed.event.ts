export class TeamRenamedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly teamId: string,
    public readonly oldName: string,
    public readonly newName: string
  ) {
    this.occurredAt = new Date();
  }
}
