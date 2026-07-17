export type WorkflowLifecycleState =
  | 'DRAFT'
  | 'PUBLISHED'
  | 'UNDER_REVISION'
  | 'DEPRECATED'
  | 'RETIRED';

export interface WorkflowLifecycle {
  readonly currentState: WorkflowLifecycleState;
  readonly lastModifiedAt: Date;
  readonly modifiedByParticipantId: string;
  readonly retirementScheduleDate?: Date;
  readonly isAllowedForNewInstances: boolean;
}
