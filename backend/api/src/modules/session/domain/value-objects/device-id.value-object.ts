export class DeviceId {
  constructor(private readonly value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error('Device ID cannot be empty');
    }
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: DeviceId): boolean {
    return this.value === other.getValue();
  }
}
