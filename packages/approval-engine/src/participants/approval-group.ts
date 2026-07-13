export interface ApprovalGroup {
  readonly groupId: string;
  readonly name: string;
  readonly description: string;
  readonly memberRoleIds: string[];
}
