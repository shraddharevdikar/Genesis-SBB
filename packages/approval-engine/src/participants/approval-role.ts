export interface ApprovalRole {
  readonly roleId: string;
  readonly name: string;
  readonly description: string;
  readonly clearanceLevel: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
}
