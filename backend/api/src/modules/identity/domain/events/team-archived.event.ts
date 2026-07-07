export class TeamArchivedEvent {
  public readonly occurredAt: Date;

  constructor(public readonly teamId: string) {
    this.occurredAt = new Date();
  }
}
