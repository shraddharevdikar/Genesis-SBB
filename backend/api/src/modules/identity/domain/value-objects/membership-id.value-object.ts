export class MembershipId {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error('Membership ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: MembershipId): boolean {
    return this.value === other.getValue();
  }
}
