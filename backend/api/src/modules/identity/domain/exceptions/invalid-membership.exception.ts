export class InvalidMembershipException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidMembershipException';
  }
}
