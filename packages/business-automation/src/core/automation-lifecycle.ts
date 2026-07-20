export type AutomationLifecycleState =
  | 'DRAFT'
  | 'UNDER_REVIEW'
  | 'ENABLED_ACTIVE'
  | 'DISABLED_PAUSED'
  | 'RETIRED';

export interface AutomationLifecycle {
  readonly currentState: AutomationLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly lastEnabledByOperatorRoleId?: string;
  readonly lastEnabledAt?: Date;
  readonly lastDisabledByOperatorRoleId?: string;
  readonly lastDisabledAt?: Date;
  readonly nextScheduledEvaluationAt?: Date;
  readonly isTriggeringPermitted: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
