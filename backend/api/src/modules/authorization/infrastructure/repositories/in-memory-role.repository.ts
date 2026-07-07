import { Injectable } from '@nestjs/common';
import { IRoleRepository } from '../../domain/repositories/role-repository.interface.js';
import { Role } from '../../domain/entities/role.entity.js';
import { RoleId } from '../../domain/value-objects/role-id.value-object.js';

@Injectable()
export class InMemoryRoleRepository implements IRoleRepository {
  private readonly storage = new Map<string, Role>();

  public async findById(id: RoleId): Promise<Role | null> {
    const role = this.storage.get(id.getValue());
    return role || null;
  }

  public async findByName(name: string): Promise<Role | null> {
    for (const role of this.storage.values()) {
      if (role.getName().toLowerCase() === name.toLowerCase()) {
        return role;
      }
    }
    return null;
  }

  public async save(role: Role): Promise<void> {
    this.storage.set(role.getId().getValue(), role);
  }

  public async delete(id: RoleId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
