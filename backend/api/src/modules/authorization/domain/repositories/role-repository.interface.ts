import { Role } from '../entities/role.entity.js';
import { RoleId } from '../value-objects/role-id.value-object.js';

export interface IRoleRepository {
  findById(id: RoleId): Promise<Role | null>;
  findByName(name: string): Promise<Role | null>;
  save(role: Role): Promise<void>;
  delete(id: RoleId): Promise<void>;
}
