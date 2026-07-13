export interface Collaborator {
  readonly collaboratorId: string;
  readonly roleId: string;
  readonly contributionType: 'WRITER' | 'EDITOR' | 'CONTRIBUTOR';
  readonly joinedAt: Date;
}
