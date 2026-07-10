export enum RelationshipLifecycleState {
  DRAFT = 'DRAFT',
  PROPOSED = 'PROPOSED',
  ACTIVE = 'ACTIVE',
  DEPRECATED = 'DEPRECATED',
  ARCHIVED = 'ARCHIVED'
}

export interface RelationshipLifecycle {
  readonly state: RelationshipLifecycleState;
  readonly effectiveStartDate: Date;
  readonly effectiveEndDate?: Date;
  readonly lastReviewedAt?: Date;
}
