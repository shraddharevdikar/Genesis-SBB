export class SessionId {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Session ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: SessionId): boolean {
    return this.value === other.getValue();
  }
}
