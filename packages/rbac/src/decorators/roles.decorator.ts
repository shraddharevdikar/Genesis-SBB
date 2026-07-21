import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

/**
 * Decorator to enforce specific role access requirements on route endpoints.
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
