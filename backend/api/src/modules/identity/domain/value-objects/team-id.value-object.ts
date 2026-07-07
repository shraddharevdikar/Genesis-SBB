export class TeamId {
  constructor(private readonly value: string) {
    if (!value) {
      throw new Error('Team ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: TeamId): boolean {
    return this.value === other.getValue();
  }
}
