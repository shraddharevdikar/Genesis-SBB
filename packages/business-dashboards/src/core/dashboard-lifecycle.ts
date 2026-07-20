export type DashboardLifecycleState =
  | 'DRAFT'
  | 'UNDER_REVIEW'
  | 'PUBLISHED_ACTIVE'
  | 'DEPRECATED'
  | 'RETIRED';

export interface DashboardLifecycle {
  readonly currentState: DashboardLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly publishedByOperatorRoleId?: string;
  readonly publishedAt?: Date;
  readonly lastReviewedAt: Date;
  readonly nextScheduledReviewAt: Date;
  readonly isAccessibleToOperators: boolean;
}
