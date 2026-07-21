import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator.js';
import { RbacService } from '../rbac.service.js';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly rbacService: RbacService
  ) {}

  /**
   * Evaluates permission requirements of the handler/class against cached resolved user permissions.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Appended by JwtAuthGuard

    if (!user || !user.id) {
      throw new ForbiddenException('User context is missing or unauthenticated');
    }

    // Resolve user permissions via cached RBAC engine
    const userPermissions = await this.rbacService.getUserPermissions(user.id);

    // Verify that all required permissions are possessed by the user
    const hasAllPermissions = requiredPermissions.every((perm) => userPermissions.includes(perm));

    if (!hasAllPermissions) {
      throw new ForbiddenException(
        `Access Denied: Required permission(s) [${requiredPermissions.join(', ')}] not possessed.`
      );
    }

    return true;
  }
}
