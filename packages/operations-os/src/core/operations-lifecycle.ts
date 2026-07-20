export type ProjectLifecycleState =
  | 'INITIATION'
  | 'PLANNING'
  | 'EXECUTION_IN_PROGRESS'
  | 'SUSPENDED_PAUSED'
  | 'CLOSING_STAGE'
  | 'COMPLETED'
  | 'ABANDONED';

export type WorkOrderLifecycleState =
  | 'DRAFT'
  | 'QUEUED_UNASSIGNED'
  | 'ASSIGNED'
  | 'IN_PROGRESS'
  | 'BLOCKED_HOLD'
  | 'COMPLETED_VERIFIED'
  | 'CANCELLED';

export type ServiceRequestLifecycleState =
  | 'SUBMITTED'
  | 'TRIAGED_ROUTED'
  | 'FULFILLMENT_IN_PROGRESS'
  | 'PENDING_CUSTOMER_FEEDBACK'
  | 'RESOLVED_CLOSED'
  | 'BREACHED_UNRESOLVED';

export type AssetLifecycleState =
  | 'PROCURED'
  | 'DEPLOYED_ACTIVE'
  | 'UNDER_MAINTENANCE'
  | 'DEGRADED_PERFORMANCE'
  | 'DECOMMISSIONED_RETIRED';

export interface OperationsLifecycle {
  readonly currentProjectState: ProjectLifecycleState;
  readonly lastStateTransitionAt: Date;
  readonly estimatedCompletionDate?: Date;
  readonly isCriticalPathDelayedFlag: boolean;
}
