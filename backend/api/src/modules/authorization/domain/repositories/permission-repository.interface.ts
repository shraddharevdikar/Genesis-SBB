import { Permission } from '../entities/permission.entity.js';
import { PermissionId } from '../value-objects/permission-id.value-object.js';

export interface IPermissionRepository {
  findById(id: PermissionId): Promise<Permission | null>;
  findByName(name: string): Promise<Permission | null>;
  save(permission: Permission): Promise<void>;
  delete(id: PermissionId): Promise<void>;
}
