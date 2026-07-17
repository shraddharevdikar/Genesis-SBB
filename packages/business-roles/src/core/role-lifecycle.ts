export type RoleLifecycleState =
  | 'DRAFT'
  | 'ACTIVE'
  | 'REVISED'
  | 'DEPRECATED'
  | 'RETIRED';

export interface RoleLifecycle {
  readonly currentState: RoleLifecycleState;
  readonly lastModifiedAt: Date;
  readonly modifiedByParticipantId: string;
  readonly sunsetTimelineDate?: Date;
  readonly isAssignable: boolean;
}
