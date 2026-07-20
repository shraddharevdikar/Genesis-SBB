export type IntelligenceLifecycleState =
  | 'DRAFT'
  | 'VALIDATING'
  | 'APPROVED_ACTIVE'
  | 'DEGRADED_QUALITY'
  | 'RETIRED';

export interface IntelligenceLifecycle {
  readonly currentState: IntelligenceLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly lastValidatedByOperatorRoleId?: string;
  readonly lastValidatedAt?: Date;
  readonly nextScheduledAuditAt?: Date;
  readonly isInsightExtractionPermitted: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
