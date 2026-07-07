export class UserId {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error('User ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: UserId): boolean {
    return this.value === other.getValue();
  }
}
