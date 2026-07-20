export type ReportLifecycleState =
  | 'DRAFT'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'PUBLISHED'
  | 'ARCHIVED'
  | 'RETIRED';

export interface ReportLifecycle {
  readonly currentState: ReportLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly approvedByOperatorRoleId?: string;
  readonly approvedAt?: Date;
  readonly publishedAt?: Date;
  readonly archivedAt?: Date;
  readonly retiredAt?: Date;
  readonly isAccessibleForDistribution: boolean;
}
