export interface IAuthorizationContext {
  userId: string;
  tenantId: string;
  organizationId: string;
  roles: string[];
}
