export class CreateTeamCommand {
  constructor(
    public readonly organizationId: string,
    public readonly name: string
  ) {}
}
