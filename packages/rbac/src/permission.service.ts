import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { CreatePermissionDto } from './dto/index.js';
import { PermissionCacheService } from './cache/permission-cache.service.js';

@Injectable()
export class PermissionService {
  constructor(
    private readonly db: DatabaseService,
    private readonly cache: PermissionCacheService
  ) {}

  /**
   * Registers a new fine-grained custom Permission.
   */
  async createPermission(actorId: string, dto: CreatePermissionDto) {
    const existing = await this.db.permission.findUnique({
      where: { key: dto.key },
    });

    if (existing) {
      throw new BadRequestException(`Permission with key "${dto.key}" already exists`);
    }

    const permission = await this.db.permission.create({
      data: {
        key: dto.key,
        description: dto.description || null,
      },
    });

    // Audit Event
    await this.logAudit(actorId, 'Permission', permission.id, 'PERMISSION_CREATED', { key: permission.key });

    return permission;
  }

  /**
   * Finds a specific permission by ID.
   */
  async findOnePermission(id: string) {
    const permission = await this.db.permission.findUnique({
      where: { id },
    });

    if (!permission) {
      throw new NotFoundException(`Permission with ID "${id}" not found`);
    }

    return permission;
  }

  /**
   * Finds a specific permission by key string.
   */
  async findPermissionByKey(key: string) {
    return this.db.permission.findUnique({
      where: { key },
    });
  }

  /**
   * Lists all registered permissions.
   */
  async findAllPermissions() {
    return this.db.permission.findMany();
  }

  /**
   * Deletes a permission, breaking any linkages to active roles and invalidating caches.
   */
  async deletePermission(actorId: string, id: string) {
    const permission = await this.db.permission.findUnique({
      where: { id },
    });

    if (!permission) {
      throw new NotFoundException(`Permission with ID "${id}" not found`);
    }

    // Find all linked role IDs to invalidate their cached users before deletion
    const linkedRoleLinks = await this.db.rolePermission.findMany({
      where: { permissionId: id },
      select: { roleId: true },
    });

    // Invalidate affected roles
    for (const link of linkedRoleLinks) {
      this.cache.invalidateRole(link.roleId);
    }

    // Perform atomic cascading removal
    await this.db.$transaction([
      this.db.rolePermission.deleteMany({
        where: { permissionId: id },
      }),
      this.db.permission.delete({
        where: { id },
      }),
    ]);

    // Audit Event
    await this.logAudit(actorId, 'Permission', id, 'PERMISSION_DELETED', { key: permission.key });

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
