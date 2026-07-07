export class OrganizationName {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Organization name cannot be empty');
    }
    if (value.trim().length < 3) {
      throw new Error('Organization name must be at least 3 characters long');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: OrganizationName): boolean {
    return this.value.trim().toLowerCase() === other.getValue().trim().toLowerCase();
  }
}
