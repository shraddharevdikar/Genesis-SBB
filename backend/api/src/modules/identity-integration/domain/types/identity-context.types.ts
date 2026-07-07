export interface CurrentUser {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly roles: string[];
}

export interface CurrentTenant {
  readonly id: string;
  readonly name: string;
  readonly code: string;
}

export interface CurrentOrganization {
  readonly id: string;
  readonly name: string;
}

export interface CurrentMembership {
  readonly id: string;
  readonly role: string;
}

export interface IdentityContext {
  readonly user?: CurrentUser;
  readonly tenant?: CurrentTenant;
  readonly organization?: CurrentOrganization;
  readonly membership?: CurrentMembership;
  readonly correlationId?: string;
}
