import { AggregateRoot } from '@sbb/shared';
import { PermissionId } from '../value-objects/permission-id.value-object.js';

export class Permission extends AggregateRoot {
  private readonly id: PermissionId;
  private readonly name: string;
  private readonly description?: string;

  constructor(id: PermissionId, name: string, description?: string) {
    super();
    if (!name || name.trim().length === 0) {
      throw new Error('Permission name cannot be empty');
    }
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public getId(): PermissionId {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string | undefined {
    return this.description;
  }
}
