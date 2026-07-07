export class IdentityId {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error('Identity ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: IdentityId): boolean {
    return this.value === other.getValue();
  }
}
