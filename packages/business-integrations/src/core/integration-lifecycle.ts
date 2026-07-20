export type IntegrationLifecycleState =
  | 'DRAFT'
  | 'CONFIGURING'
  | 'CONNECTED_ACTIVE'
  | 'DEGRADED_HEALTH'
  | 'DISCONNECTED'
  | 'RETIRED';

export interface IntegrationLifecycle {
  readonly currentState: IntegrationLifecycleState;
  readonly createdByOperatorRoleId: string;
  readonly lastTestedByOperatorRoleId?: string;
  readonly lastTestedAt?: Date;
  readonly nextScheduledSyncAt?: Date;
  readonly isDataSyncPermitted: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
