import { IdentityContextType } from '@sbb/shared';

export class IdentityContext implements IdentityContextType {
  public readonly userId?: string;
  public readonly username?: string;
  public readonly email?: string;
  public readonly roles?: string[];
  public readonly permissions?: string[];

  constructor(options?: IdentityContextType) {
    this.userId = options?.userId;
    this.username = options?.username;
    this.email = options?.email;
    this.roles = options?.roles ? [...options.roles] : undefined;
    this.permissions = options?.permissions ? [...options.permissions] : undefined;
    Object.freeze(this);
  }
}
