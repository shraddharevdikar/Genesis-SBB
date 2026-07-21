import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator.js';
import { DatabaseService } from '@sbb/database';
import { ROLE_HIERARCHY } from '../constants/permissions.constants.js';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly db: DatabaseService
  ) {}

  /**
   * Evaluates role requirements of the handler/class against user assignments, respecting hierarchy.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Appended by JwtAuthGuard

    if (!user || !user.id) {
      throw new ForbiddenException('User context is missing or unauthenticated');
    }

    // Fetch user's assigned roles directly from DB to verify freshness and tenant bounds
    const dbUser = await this.db.user.findUnique({
      where: { id: user.id, deletedAt: null },
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!dbUser || dbUser.status !== 'ACTIVE') {
      throw new ForbiddenException('User account is inactive or deleted');
    }

    const assignedRoleNames = dbUser.userRoles
      .map((ur) => ur.role)
      .filter((r) => !r.deletedAt)
      .map((r) => r.name);

    // Expand assigned roles based on the hierarchy (higher roles inherit lower roles/permissions)
    const expandedUserRoles = new Set<string>();
    for (const name of assignedRoleNames) {
      expandedUserRoles.add(name);
      const inherited = ROLE_HIERARCHY[name] || [];
      for (const h of inherited) {
        expandedUserRoles.add(h);
      }
    }

    // Check if any required role is satisfied by the user's expanded roles
    const hasRequiredRole = requiredRoles.some((role) => expandedUserRoles.has(role));

    if (!hasRequiredRole) {
      throw new ForbiddenException(
        `Access Denied: Required role(s) [${requiredRoles.join(', ')}] not satisfied by user's active role hierarchy.`
      );
    }

    return true;
  }
}
