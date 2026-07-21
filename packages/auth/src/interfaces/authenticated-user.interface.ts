export interface IAuthenticatedUser {
  id: string;
  email: string;
  organizationId: string;
  tenantId: string;
  roles: string[];
}
