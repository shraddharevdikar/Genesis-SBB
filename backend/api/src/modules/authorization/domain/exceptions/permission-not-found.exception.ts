export class PermissionNotFoundException extends Error {
  constructor(permissionId: string) {
    super(`Permission with ID '${permissionId}' was not found.`);
    this.name = 'PermissionNotFoundException';
  }
}
