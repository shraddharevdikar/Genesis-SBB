import { Module, Global } from '@nestjs/common';
import { DatabaseModule } from '@sbb/database';
import { RbacService } from './rbac.service.js';
import { PermissionService } from './permission.service.js';
import { RoleService } from './role.service.js';
import { AuthorizationService } from './authorization.service.js';
import { PermissionCacheService } from './cache/permission-cache.service.js';
import { RolesGuard } from './guards/roles.guard.js';
import { PermissionsGuard } from './guards/permissions.guard.js';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [
    RbacService,
    PermissionService,
    RoleService,
    AuthorizationService,
    PermissionCacheService,
    RolesGuard,
    PermissionsGuard,
  ],
  exports: [
    RbacService,
    PermissionService,
    RoleService,
    AuthorizationService,
    PermissionCacheService,
    RolesGuard,
    PermissionsGuard,
  ],
})
export class RbacModule {}
