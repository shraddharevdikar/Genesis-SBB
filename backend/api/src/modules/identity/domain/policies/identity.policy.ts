export class IdentityPolicy {
  public static canActivate(identityStatus: boolean): boolean {
    return identityStatus === true;
  }
}
