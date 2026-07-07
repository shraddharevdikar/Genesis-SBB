export class TenantId {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error('Tenant ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: TenantId): boolean {
    return this.value === other.getValue();
  }
}
