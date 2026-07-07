export class DuplicateTenantException extends Error {
  constructor(name: string) {
    super(`Tenant with name '${name}' already exists.`);
    this.name = 'DuplicateTenantException';
  }
}
