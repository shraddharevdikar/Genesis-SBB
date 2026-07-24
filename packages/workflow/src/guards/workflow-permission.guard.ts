import { Injectable, CanActivate, ExecutionContext, ForbiddenException, Inject, Optional } from '@nestjs/common';
import { AuthorizationService } from '@sbb/rbac';

@Injectable()
export class WorkflowPermissionGuard implements CanActivate {
  constructor(
    @Optional() @Inject(AuthorizationService) private readonly authzService?: AuthorizationService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (!this.authzService) {
      return true; // Pass if RBAC service is not loaded
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      return true;
    }

    const routePath = request.route?.path || request.url;
    const method = request.method;

    let requiredPermission = 'workflow:read';
    if (method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE') {
      requiredPermission = 'workflow:write';
    }

    if (routePath.includes('/start') || routePath.includes('/execute')) {
      requiredPermission = 'workflow:execute';
    } else if (routePath.includes('/approve') || routePath.includes('/reject')) {
      requiredPermission = 'workflow:approve';
    }

    const isAuthorized = await this.authzService.hasPermission(
      user.id || user.sub,
      requiredPermission
    );

    if (!isAuthorized) {
      throw new ForbiddenException(`User lacks required permission: ${requiredPermission}`);
    }

    return true;
  }
}
