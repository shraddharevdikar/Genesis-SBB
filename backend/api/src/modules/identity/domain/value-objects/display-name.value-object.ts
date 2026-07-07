export class DisplayName {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Display name cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: DisplayName): boolean {
    return this.value.trim().toLowerCase() === other.getValue().trim().toLowerCase();
  }
}
