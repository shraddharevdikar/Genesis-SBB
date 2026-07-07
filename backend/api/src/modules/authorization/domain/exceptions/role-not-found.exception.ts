export class RoleNotFoundException extends Error {
  constructor(roleId: string) {
    super(`Role with ID '${roleId}' was not found.`);
    this.name = 'RoleNotFoundException';
  }
}
