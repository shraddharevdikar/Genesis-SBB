export class PermissionId {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Permission ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: PermissionId): boolean {
    return this.value === other.getValue();
  }
}
