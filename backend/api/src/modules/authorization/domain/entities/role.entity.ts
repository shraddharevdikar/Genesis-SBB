import { AggregateRoot } from '@sbb/shared';
import { RoleId } from '../value-objects/role-id.value-object.js';
import { PermissionId } from '../value-objects/permission-id.value-object.js';
import { RoleCreatedEvent } from '../events/role-created.event.js';
import { PermissionGrantedEvent } from '../events/permission-granted.event.js';

export class Role extends AggregateRoot {
  private readonly id: RoleId;
  private readonly name: string;
  private readonly permissions: Set<string> = new Set<string>();

  constructor(id: RoleId, name: string, permissions: PermissionId[] = []) {
    super();
    if (!name || name.trim().length === 0) {
      throw new Error('Role name cannot be empty');
    }
    this.id = id;
    this.name = name;
    permissions.forEach((p) => this.permissions.add(p.getValue()));
  }

  public static create(id: RoleId, name: string): Role {
    const role = new Role(id, name);
    role.addDomainEvent(new RoleCreatedEvent(id.getValue(), name));
    return role;
  }

  public getId(): RoleId {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPermissions(): PermissionId[] {
    return Array.from(this.permissions).map((p) => new PermissionId(p));
  }

  public grantPermission(permissionId: PermissionId): void {
    if (this.permissions.has(permissionId.getValue())) {
      return;
    }
    this.permissions.add(permissionId.getValue());
    this.addDomainEvent(new PermissionGrantedEvent(this.id.getValue(), permissionId.getValue()));
  }

  public revokePermission(permissionId: PermissionId): void {
    this.permissions.delete(permissionId.getValue());
  }

  public hasPermission(permissionId: PermissionId): boolean {
    return this.permissions.has(permissionId.getValue());
  }
}
