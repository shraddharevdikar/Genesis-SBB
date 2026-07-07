export class DuplicateOrganizationException extends Error {
  constructor(name: string) {
    super(`Organization with name '${name}' already exists.`);
    this.name = 'DuplicateOrganizationException';
  }
}
