export class EmailAddress {
  constructor(private readonly value: string) {
    if (!value || !value.includes('@')) {
      throw new Error('Invalid email address format');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: EmailAddress): boolean {
    return this.value.toLowerCase() === other.getValue().toLowerCase();
  }
}
