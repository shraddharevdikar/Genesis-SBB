import { CurrentTenant } from '../types/identity-context.types.js';

export interface TenantResolver {
  resolveTenant(request: any): Promise<CurrentTenant | null>;
}
