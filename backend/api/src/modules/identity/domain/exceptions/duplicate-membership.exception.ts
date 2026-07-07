export class DuplicateMembershipException extends Error {
  constructor(userId: string, organizationId: string) {
    super(`Membership for user '${userId}' in organization '${organizationId}' already exists.`);
    this.name = 'DuplicateMembershipException';
  }
}
