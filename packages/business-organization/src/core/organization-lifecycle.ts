export type OrganizationLifecycleState =
  | 'DRAFT'
  | 'ACTIVE'
  | 'SUSPENDED'
  | 'RESTRUCTURING'
  | 'LIQUIDATED';

export interface OrganizationLifecycle {
  readonly currentState: OrganizationLifecycleState;
  readonly lastStateTransitionAt: Date;
  readonly reasonNotes?: string;
  readonly isAuthorizedToOperate: boolean;
}
