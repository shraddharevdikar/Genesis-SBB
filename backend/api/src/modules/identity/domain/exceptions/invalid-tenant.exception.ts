export class InvalidTenantException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidTenantException';
  }
}
