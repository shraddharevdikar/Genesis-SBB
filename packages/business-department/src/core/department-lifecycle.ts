export type DepartmentLifecycleState =
  | 'DESIGN'
  | 'INITIALIZING'
  | 'ACTIVE'
  | 'SUSPENDED'
  | 'REORGANIZING'
  | 'DECOMMISSIONED';

export interface DepartmentLifecycle {
  readonly currentState: DepartmentLifecycleState;
  readonly lastTransitionedAt: Date;
  readonly triggerReasonNotes?: string;
  readonly isOperational: boolean;
}
