export class RoleId {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Role ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: RoleId): boolean {
    return this.value === other.getValue();
  }
}
