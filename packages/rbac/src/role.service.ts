import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { CreateRoleDto, UpdateRoleDto } from './dto/index.js';
import { PermissionCacheService } from './cache/permission-cache.service.js';

@Injectable()
export class RoleService {
  constructor(
    private readonly db: DatabaseService,
    private readonly cache: PermissionCacheService
  ) {}

  /**
   * Creates a brand-new custom Role for an organization.
   */
  async createRole(actorId: string, dto: CreateRoleDto) {
    const existing = await this.db.role.findFirst({
      where: {
        organizationId: dto.organizationId,
        name: dto.name,
        deletedAt: null,
      },
    });

    if (existing) {
      throw new BadRequestException(`Role with name "${dto.name}" already exists in this organization`);
    }

    const role = await this.db.role.create({
      data: {
        organizationId: dto.organizationId,
        name: dto.name,
        description: dto.description || null,
      },
    });

    // Audit Event
    await this.logAudit(actorId, 'Role', role.id, 'ROLE_CREATED', { name: role.name, organizationId: role.organizationId });

    return role;
  }

  /**
   * Updates an existing custom Role.
   */
  async updateRole(actorId: string, roleId: string, dto: UpdateRoleDto) {
    const role = await this.db.role.findUnique({
      where: { id: roleId },
    });

    if (!role || role.deletedAt) {
      throw new NotFoundException(`Role with ID "${roleId}" not found`);
    }

    const updatedRole = await this.db.role.update({
      where: { id: roleId },
      data: {
        name: dto.name ?? role.name,
        description: dto.description ?? role.description,
      },
    });

    // Invalidate Cache for this role
    this.cache.invalidateRole(roleId);

    // Audit Event
    await this.logAudit(actorId, 'Role', roleId, 'ROLE_UPDATED', dto);

    return updatedRole;
  }

  /**
   * Performs soft deletion on a Role, cleaning up active assignments and permission links.
   */
  async deleteRole(actorId: string, roleId: string) {
    const role = await this.db.role.findUnique({
      where: { id: roleId },
    });

    if (!role || role.deletedAt) {
      throw new NotFoundException(`Role with ID "${roleId}" not found`);
    }

    // Invalidate Cache
    this.cache.invalidateRole(roleId);

    await this.db.$transaction([
      // Clean up role permissions
      this.db.rolePermission.deleteMany({
        where: { roleId },
      }),
      // Clean up user roles
      this.db.userRole.deleteMany({
        where: { roleId },
      }),
      // Soft-delete the role
      this.db.role.update({
        where: { id: roleId },
        data: { deletedAt: new Date() },
      }),
    ]);

    // Audit Event
    await this.logAudit(actorId, 'Role', roleId, 'ROLE_DELETED', { name: role.name });

    return { success: true };
  }

  /**
   * Finds a specific role by its ID.
   */
  async findOneRole(roleId: string) {
    const role = await this.db.role.findUnique({
      where: { id: roleId },
      include: {
        rolePermissions: {
          include: { permission: true },
        },
      },
    });

    if (!role || role.deletedAt) {
      throw new NotFoundException(`Role with ID "${roleId}" not found`);
    }

    return role;
  }

  /**
   * Lists all roles belonging to an organization.
   */
  async findAllRoles(organizationId: string) {
    return this.db.role.findMany({
      where: {
        organizationId,
        deletedAt: null,
      },
      include: {
        rolePermissions: {
          include: { permission: true },
        },
      },
    });
  }

  /**
   * Assigns a role to a user. Supports multi-tenant safety by ensuring role organization matches user organization.
   */
  async assignRoleToUser(actorId: string, userId: string, roleId: string) {
    const user = await this.db.user.findUnique({
      where: { id: userId },
    });

    if (!user || user.deletedAt) {
      throw new NotFoundException(`User with ID "${userId}" not found`);
    }

    const role = await this.db.role.findUnique({
      where: { id: roleId },
    });

    if (!role || role.deletedAt) {
      throw new NotFoundException(`Role with ID "${roleId}" not found`);
    }

    // Multi-tenant check
    if (user.organizationId !== role.organizationId) {
      throw new ForbiddenException('Multi-tenant boundary violation: User and Role do not belong to the same organization');
    }

    // Assign the role (upsert / findOrCreate equivalent)
    const existingAssignment = await this.db.userRole.findUnique({
      where: {
        userId_roleId: { userId, roleId },
      },
    });

    if (existingAssignment) {
      return existingAssignment;
    }

    const userRole = await this.db.userRole.create({
      data: {
        userId,
        roleId,
      },
    });

    // Invalidate user cache
    this.cache.invalidateUser(userId);

    // Audit Event
    await this.logAudit(actorId, 'User', userId, 'ROLE_ASSIGNED', { roleId, roleName: role.name });

    return userRole;
  }

  /**
   * Removes a role assignment from a user.
   */
  async removeRoleFromUser(actorId: string, userId: string, roleId: string) {
    const assignment = await this.db.userRole.findUnique({
      where: {
        userId_roleId: { userId, roleId },
      },
    });

    if (!assignment) {
      throw new NotFoundException(`Role assignment not found for User "${userId}" and Role "${roleId}"`);
    }

    await this.db.userRole.delete({
      where: {
        userId_roleId: { userId, roleId },
      },
    });

    // Invalidate user cache
    this.cache.invalidateUser(userId);

    // Audit Event
    await this.logAudit(actorId, 'User', userId, 'ROLE_REMOVED', { roleId });

    return { success: true };
  }

  /**
   * Maps a Permission to a Role.
   */
  async assignPermissionToRole(actorId: string, roleId: string, permissionId: string) {
    const role = await this.db.role.findUnique({
      where: { id: roleId },
    });

    if (!role || role.deletedAt) {
      throw new NotFoundException(`Role with ID "${roleId}" not found`);
    }

    const permission = await this.db.permission.findUnique({
      where: { id: permissionId },
    });

    if (!permission) {
      throw new NotFoundException(`Permission with ID "${permissionId}" not found`);
    }

    const existingLink = await this.db.rolePermission.findUnique({
      where: {
        roleId_permissionId: { roleId, permissionId },
      },
    });

    if (existingLink) {
      return existingLink;
    }

    const link = await this.db.rolePermission.create({
      data: {
        roleId,
        permissionId,
      },
    });

    // Invalidate cache for this role
    this.cache.invalidateRole(roleId);

    // Audit Event
    await this.logAudit(actorId, 'Role', roleId, 'PERMISSION_ASSIGNED_TO_ROLE', { permissionId, permissionKey: permission.key });

    return link;
  }

  /**
   * Unmaps a Permission from a Role.
   */
  async removePermissionFromRole(actorId: string, roleId: string, permissionId: string) {
    const existingLink = await this.db.rolePermission.findUnique({
      where: {
        roleId_permissionId: { roleId, permissionId },
      },
    });

    if (!existingLink) {
      throw new NotFoundException(`Permission link not found for Role "${roleId}" and Permission "${permissionId}"`);
    }

    await this.db.rolePermission.delete({
      where: {
        roleId_permissionId: { roleId, permissionId },
      },
    });

    // Invalidate cache for this role
    this.cache.invalidateRole(roleId);

    // Audit Event
    await this.logAudit(actorId, 'Role', roleId, 'PERMISSION_REMOVED_FROM_ROLE', { permissionId });

    return { success: true };
  }

  /**
   * Internal helper to record security/configuration audit trails.
   */
  private async logAudit(actorId: string, entity: string, entityId: string, action: string, payload: any) {
    try {
      await this.db.auditLog.create({
        data: {
          actorId,
          entity,
          entityId,
          action,
          payload: payload || {},
        },
      });
    } catch (err) {
      console.error('Audit logging failed:', err);
    }
  }
}
