export class InvalidOrganizationException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidOrganizationException';
  }
}
