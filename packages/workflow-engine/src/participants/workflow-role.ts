export interface WorkflowRole {
  readonly roleId: string;
  readonly name: string;
  readonly description: string;
  readonly classificationLevel: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
}
