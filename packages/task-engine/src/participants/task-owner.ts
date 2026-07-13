export interface TaskOwner {
  readonly ownerId: string;
  readonly roleId: string;
  readonly email: string;
  readonly canDelegate: boolean;
  readonly escalationContactId?: string;
}
