export interface MemoryAccessPolicy {
  readonly policyId: string;
  readonly classificationAllowed: 'PUBLIC' | 'INTERNAL' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
  readonly readAllowed: boolean;
  readonly writeAllowed: boolean;
  readonly retainUntilDate?: Date;
  readonly requiresHumanApprovalForWrite: boolean;
}
