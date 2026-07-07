export class AuthenticateUserCommand {
  constructor(
    public readonly username: string,
    public readonly secret: string,
    public readonly providerName: string = 'password'
  ) {}
}
