export class CreateMembershipCommand {
  constructor(
    public readonly userId: string,
    public readonly organizationId: string,
    public readonly role: string
  ) {}
}
