export class CreateIdentityCommand {
  constructor(
    public readonly email: string,
    public readonly passwordHash: string
  ) {}
}
