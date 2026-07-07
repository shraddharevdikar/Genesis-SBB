export class DuplicateEmailException extends Error {
  constructor(email: string) {
    super(`User with email address '${email}' already exists.`);
    this.name = 'DuplicateEmailException';
  }
}
