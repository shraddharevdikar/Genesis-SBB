import { OrganizationContextType } from '@sbb/shared';

export class OrganizationContext implements OrganizationContextType {
  public readonly organizationId?: string;
  public readonly organizationName?: string;
  public readonly membershipId?: string;
  public readonly membershipRole?: string;

  constructor(options?: OrganizationContextType) {
    this.organizationId = options?.organizationId;
    this.organizationName = options?.organizationName;
    this.membershipId = options?.membershipId;
    this.membershipRole = options?.membershipRole;
    Object.freeze(this);
  }
}
