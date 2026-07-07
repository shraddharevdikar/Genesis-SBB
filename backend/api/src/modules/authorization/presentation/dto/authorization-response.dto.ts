export class AuthorizationResponseDto {
  isAuthorized!: boolean;
  userId!: string;
  resource!: string;
  action!: string;
}
