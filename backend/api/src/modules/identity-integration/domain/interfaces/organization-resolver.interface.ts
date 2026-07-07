import { CurrentOrganization } from '../types/identity-context.types.js';

export interface OrganizationResolver {
  resolveOrganization(request: any): Promise<CurrentOrganization | null>;
}
