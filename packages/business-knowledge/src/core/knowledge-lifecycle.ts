export type KnowledgeLifecycleState =
  | 'DRAFT'
  | 'UNDER_REVIEW'
  | 'VALIDATED_ACTIVE'
  | 'DEPRECATED'
  | 'RETIRED';

export interface KnowledgeLifecycle {
  readonly currentState: KnowledgeLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly validatedByOperatorRoleId?: string;
  readonly validatedAt?: Date;
  readonly lastReviewedAt: Date;
  readonly nextReviewDueAt: Date;
  readonly isQueryableFlag: boolean;
}
