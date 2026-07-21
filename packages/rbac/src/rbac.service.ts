import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { PermissionCacheService } from './cache/permission-cache.service.js';
import { ROLE_HIERARCHY } from './constants/permissions.constants.js';

@Injectable()
export class RbacService {
  constructor(
    private readonly db: DatabaseService,
    private readonly cache: PermissionCacheService
  ) {}

  /**
   * Resolves a user's full, flattened set of permissions, expanding any hierarchy-inherited roles.
   * Leverages caching for O(1) subsequent resolution speeds.
   */
  async getUserPermissions(userId: string): Promise<string[]> {
    // 1. Try Cache First
    const cached = this.cache.get(userId);
    if (cached) {
      return cached;
    }

    // 2. Fetch User along with assigned roles
    const user = await this.db.user.findUnique({
      where: { id: userId, deletedAt: null },
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!user || user.status !== 'ACTIVE') {
      throw new NotFoundException(`Active user with ID "${userId}" not found`);
    }

    const assignedRoles = user.userRoles
      .map((ur) => ur.role)
      .filter((role) => !role.deletedAt);

    const assignedRoleNames = assignedRoles.map((r) => r.name);
    const assignedRoleIds = assignedRoles.map((r) => r.id);

    // 3. Expand roles recursively according to Role Hierarchy
    const expandedRoleNames = new Set<string>();
    for (const roleName of assignedRoleNames) {
      expandedRoleNames.add(roleName);
      const inherited = ROLE_HIERARCHY[roleName] || [];
      for (const inheritedRole of inherited) {
        expandedRoleNames.add(inheritedRole);
      }
    }

    // 4. Fetch permissions associated with all expanded roles (constrained to user's organization)
    const rolesWithPermissions = await this.db.role.findMany({
      where: {
        organizationId: user.organizationId,
        name: { in: Array.from(expandedRoleNames) },
        deletedAt: null,
      },
      include: {
        rolePermissions: {
          include: {
            permission: true,
          },
        },
      },
    });

    const permissionKeys = new Set<string>();
    for (const role of rolesWithPermissions) {
      for (const rolePerm of role.rolePermissions) {
        permissionKeys.add(rolePerm.permission.key);
      }
    }

    const resolvedPermissions = Array.from(permissionKeys);

    // 5. Populate Cache
    this.cache.set(userId, resolvedPermissions, assignedRoleIds);

    return resolvedPermissions;
  }

  /**
   * Checks if a user has a specific explicit role.
   */
  async userHasRole(userId: string, roleName: string): Promise<boolean> {
    const user = await this.db.user.findUnique({
      where: { id: userId, deletedAt: null },
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!user || user.status !== 'ACTIVE') {
      return false;
    }

    return user.userRoles.some((ur) => !ur.role.deletedAt && ur.role.name === roleName);
  }
}
