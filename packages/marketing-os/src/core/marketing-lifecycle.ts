export type CampaignLifecycleState =
  | 'DRAFT'
  | 'STRATEGY_PLANNED'
  | 'AUDIENCE_DEFINED'
  | 'READY_TO_LAUNCH'
  | 'ACTIVE_RUNNING'
  | 'PAUSED'
  | 'COMPLETED'
  | 'CANCELLED';

export interface CampaignLifecycle {
  readonly currentState: CampaignLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly launchedAt?: Date;
  readonly pausedAt?: Date;
  readonly completedAt?: Date;
  readonly lastOptimizedAt?: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
