export class PolicyId {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Policy ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: PolicyId): boolean {
    return this.value === other.getValue();
  }
}
