export class AuthenticateUserDto {
  username!: string;
  secret!: string;
  providerName?: string;
}
