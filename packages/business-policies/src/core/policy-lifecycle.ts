export type PolicyLifecycleState =
  | 'DRAFT'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'PUBLISHED_ACTIVE'
  | 'SUSPENDED'
  | 'RETIRED';

export interface PolicyLifecycle {
  readonly currentState: PolicyLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly approvedByOperatorRoleId?: string;
  readonly approvedAt?: Date;
  readonly activatedAt?: Date;
  readonly lastReviewedAt: Date;
  readonly nextReviewDueAt: Date;
  readonly isEnforcementMandatory: boolean;
}
