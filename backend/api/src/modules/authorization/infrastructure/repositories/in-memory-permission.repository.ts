import { Injectable } from '@nestjs/common';
import { IPermissionRepository } from '../../domain/repositories/permission-repository.interface.js';
import { Permission } from '../../domain/entities/permission.entity.js';
import { PermissionId } from '../../domain/value-objects/permission-id.value-object.js';

@Injectable()
export class InMemoryPermissionRepository implements IPermissionRepository {
  private readonly storage = new Map<string, Permission>();

  public async findById(id: PermissionId): Promise<Permission | null> {
    const permission = this.storage.get(id.getValue());
    return permission || null;
  }

  public async findByName(name: string): Promise<Permission | null> {
    for (const permission of this.storage.values()) {
      if (permission.getName().toLowerCase() === name.toLowerCase()) {
        return permission;
      }
    }
    return null;
  }

  public async save(permission: Permission): Promise<void> {
    this.storage.set(permission.getId().getValue(), permission);
  }

  public async delete(id: PermissionId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
