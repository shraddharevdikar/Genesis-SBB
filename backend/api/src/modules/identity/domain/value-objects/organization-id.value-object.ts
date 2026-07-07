export class OrganizationId {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error('Organization ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: OrganizationId): boolean {
    return this.value === other.getValue();
  }
}
